"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  forwardRef,
} from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  Transition,
  Variant,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { XIcon, Plus, ChevronLeft, ChevronRight } from "lucide-react";

interface DialogContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uniqueId: string;
  triggerRef: React.RefObject<HTMLDivElement>;
}

const DialogContext = React.createContext<DialogContextType | null>(null);

function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
}

type DialogProviderProps = {
  children: React.ReactNode;
  transition?: Transition;
};

function DialogProvider({ children, transition }: DialogProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const triggerRef = useRef<HTMLDivElement>(null);

  const contextValue = useMemo(
    () => ({ isOpen, setIsOpen, uniqueId, triggerRef }),
    [isOpen, uniqueId],
  );

  return (
    <DialogContext.Provider value={contextValue}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogContext.Provider>
  );
}

type DialogProps = {
  children: React.ReactNode;
  transition?: Transition;
};

function Dialog({ children, transition }: DialogProps) {
  return (
    <DialogProvider>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogProvider>
  );
}

type DialogTriggerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  triggerRef?: React.RefObject<HTMLDivElement>;
};

function DialogTrigger({
  children,
  className,
  style,
  triggerRef,
}: DialogTriggerProps) {
  const { setIsOpen, isOpen, uniqueId } = useDialog();

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
    },
    [isOpen, setIsOpen],
  );

  return (
    <motion.div
      ref={triggerRef}
      layoutId={`dialog-${uniqueId}`}
      className={cn("relative cursor-pointer", className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={style}
      role="button"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls={`dialog-content-${uniqueId}`}
    >
      {children}
    </motion.div>
  );
}

type DialogContentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function DialogContent({ children, className, style }: DialogContentProps) {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useDialog();
  const containerRef = useRef<HTMLDivElement>(null);
  const [firstFocusableElement, setFirstFocusableElement] =
    useState<HTMLElement | null>(null);
  const [lastFocusableElement, setLastFocusableElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
      if (event.key === "Tab") {
        if (!firstFocusableElement || !lastFocusableElement) return;

        if (event.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            event.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen, firstFocusableElement, lastFocusableElement]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      const focusableElements = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusableElements && focusableElements.length > 0) {
        setFirstFocusableElement(focusableElements[0] as HTMLElement);
        setLastFocusableElement(
          focusableElements[focusableElements.length - 1] as HTMLElement,
        );
        (focusableElements[0] as HTMLElement).focus();
      }
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
    } else {
      document.body.classList.remove("overflow-hidden");
      triggerRef.current?.focus();
    }
  }, [isOpen, triggerRef]);

  return (
    <>
      <motion.div
        ref={containerRef}
        layoutId={`dialog-${uniqueId}`}
        className={cn("overflow-hidden", className)}
        style={style}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`dialog-title-${uniqueId}`}
        aria-describedby={`dialog-description-${uniqueId}`}
      >
        {children}
      </motion.div>
    </>
  );
}

type DialogContainerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function DialogContainer({ children, className }: DialogContainerProps) {
  const { isOpen, setIsOpen, uniqueId } = useDialog();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
    }
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;
  return (
    <AnimatePresence initial={false} mode="sync">
      {isOpen && (
        <>
          <motion.div
            key={`backdrop-${uniqueId}`}
            className="fixed inset-0 z-50 h-full  w-full bg-white/40 backdrop-blur-sm dark:bg-black/40 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <div className={cn(`fixed  inset-0 z-50 mx-auto w-fit`, className)}>
            {children}
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

type DialogTitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function DialogTitle({ children, className, style }: DialogTitleProps) {
  const { uniqueId } = useDialog();

  return (
    <motion.div
      layoutId={`dialog-title-container-${uniqueId}`}
      className={className}
      style={style}
      layout
    >
      {children}
    </motion.div>
  );
}

type DialogSubtitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function DialogSubtitle({ children, className, style }: DialogSubtitleProps) {
  const { uniqueId } = useDialog();

  return (
    <motion.div
      layoutId={`dialog-subtitle-container-${uniqueId}`}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

type DialogDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  disableLayoutAnimation?: boolean;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
};

function DialogDescription({
  children,
  className,
  variants,
  disableLayoutAnimation,
}: DialogDescriptionProps) {
  const { uniqueId } = useDialog();

  return (
    <motion.div
      key={`dialog-description-${uniqueId}`}
      layoutId={
        disableLayoutAnimation
          ? undefined
          : `dialog-description-content-${uniqueId}`
      }
      variants={variants}
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      id={`dialog-description-${uniqueId}`}
    >
      {children}
    </motion.div>
  );
}

type DialogImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

function DialogImage({ src, alt, className, style }: DialogImageProps) {
  const { uniqueId } = useDialog();

  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn(className)}
      layoutId={`dialog-img-${uniqueId}`}
      style={style}
    />
  );
}

type DialogCloseProps = {
  children?: React.ReactNode;
  className?: string;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
};

function DialogClose({ children, className, variants }: DialogCloseProps) {
  const { setIsOpen, uniqueId } = useDialog();

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <motion.button
      onClick={handleClose}
      type="button"
      aria-label="Close dialog"
      key={`dialog-close-${uniqueId}`}
      className={cn("absolute right-6 top-6", className)}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children || <XIcon size={24} />}
    </motion.button>
  );
}

interface ComponentItem {
  id: number;
  url: { src: string };
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
}

interface ComponentProps {
  items: ComponentItem[];
}

const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ items }, ref) => {
    const [page, setPage] = useState(0);
    const pageSize = 9;
    const pageCount = Math.ceil(items.length / pageSize);
    const paginatedItems = items.slice(page * pageSize, (page + 1) * pageSize);

    return (
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 min-h-[800px]">
          {paginatedItems.map((item) => (
            <div key={item.id} className="flex">
              <Dialog
                transition={{
                  type: "spring",
                  bounce: 0.05,
                  duration: 0.5,
                }}
              >
                <DialogTrigger
                  style={{ borderRadius: "12px" }}
                  className="flex max-h-[260px] min-h-[220px] w-full cursor-pointer flex-col overflow-hidden border bg-gray-300 hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-950"
                >
                  <DialogImage
                    src={item.url.src}
                    alt=""
                    className="h-32 w-full object-cover"
                  />
                  <div className="flex flex-grow flex-col justify-between p-3">
                    <DialogTitle className="truncate text-lg text-zinc-950 dark:text-zinc-50">
                      {item.title}
                    </DialogTitle>
                    <p className="line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContainer className="fixed inset-0 z-50 flex items-center justify-center">
                  <DialogContent
                    style={{ borderRadius: "20px" }}
                    className="relative mx-auto flex h-auto w-[95vw] min-w-[280px] max-w-xl flex-col items-center justify-center overflow-y-auto border bg-gray-300 p-0 hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-950"
                  >
                    <div className="flex w-full flex-col items-center justify-center p-6">
                      <DialogImage
                        src={item.url.src}
                        alt=""
                        className="mx-auto mb-4 max-h-56 w-3/4 rounded-t-lg object-contain"
                      />
                      <DialogTitle className="mb-2 w-full text-center text-2xl text-zinc-950 dark:text-zinc-50">
                        {item.githubUrl ? (
                          <a
                            href={item.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-600"
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </DialogTitle>
                      <DialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: -40 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: -50 },
                        }}
                        className="w-full px-2 pb-2 md:px-6"
                      >
                        <p className="mt-2 text-center text-base text-zinc-500 dark:text-zinc-500">
                          {item.description}
                        </p>
                      </DialogDescription>
                    </div>
                    <DialogClose className="absolute right-2 top-2 rounded-full bg-gray-400 p-2 text-zinc-50 hover:bg-gray-500 dark:bg-gray-900 dark:hover:bg-gray-800" />
                  </DialogContent>
                </DialogContainer>
              </Dialog>
            </div>
          ))}
        </div>
        <div className="pointer-events-auto relative z-[60] mt-8 flex items-center justify-center gap-4">
          <button
            className="rounded bg-gray-200 px-4 py-2 text-gray-700 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-200"
            onClick={() => {
              console.log("Previous clicked, current page:", page);
              setPage((p) => Math.max(p - 1, 0));
            }}
            disabled={page === 0}
          >
            Previous
          </button>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Page {page + 1} of {pageCount}
          </span>
          <button
            className="rounded bg-gray-200 px-4 py-2 text-gray-700 disabled:opacity-50 dark:bg-gray-800 dark:text-gray-200"
            onClick={() => setPage((p) => Math.min(p + 1, pageCount - 1))}
            disabled={page === pageCount - 1}
          >
            Next
          </button>
        </div>
      </div>
    );
  },
);

export default Component;
