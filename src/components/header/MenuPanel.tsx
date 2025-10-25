"use client";

import { memo } from "react";
import {
  AnimatePresence,
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import clsx from "clsx";

type Props = {
  open: boolean;
  id?: string;
  className?: string;
  children: React.ReactNode;
};

function MenuPanelBase({ open, id, className, children }: Props) {
  const prefersReduced = useReducedMotion();

  const variants: Variants = prefersReduced
    ? {
        hidden: { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
        visible: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
        exit: { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
      }
    : {
        hidden: {
          opacity: 0,
          y: -6,
          clipPath: "inset(0% 0% 100% 0%)",
          transition: { duration: 0.16, ease: [0.16, 1, 0.3, 1] },
        },
        visible: {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
        },
        exit: {
          opacity: 0,
          y: -4,
          clipPath: "inset(0% 0% 100% 0%)",
          transition: { duration: 0.14, ease: [0.16, 1, 0.3, 1] },
        },
      };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={id}
          role="menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className={clsx("overflow-hidden", className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const MenuPanel = memo(MenuPanelBase);
export default MenuPanel;
