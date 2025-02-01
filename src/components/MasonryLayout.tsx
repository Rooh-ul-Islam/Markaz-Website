import React from "react";
import { motion } from "framer-motion";

interface MasonryLayoutProps {
  children: React.ReactNode[];
}

export const MasonryLayout: React.FC<MasonryLayoutProps> = ({ children }) => {
  const columns: React.ReactNode[][] = [[], [], []];

  React.Children.forEach(children, (child, index) => {
    if (React.isValidElement(child)) {
      columns[index % 3].push(child);
    }
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-4">
          {column.map((item, itemIndex) => (
            <motion.div
              key={itemIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: itemIndex * 0.1 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};
