"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

export function CategoryButton({ category, isSelected, onClick }: CategoryButtonProps) {
  return (
    <motion.button
      onClick={onClick}      className={cn(
        "relative px-4 py-2 text-sm font-medium rounded-md transition-colors border border-input",
        isSelected
          ? "bg-secondary text-secondary-foreground"
          : "bg-background hover:bg-accent hover:text-accent-foreground"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layout
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
      {isSelected && (
        <motion.div
          layoutId="categoryHighlight"
          className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.button>
  );
}
