'use client'

import { FAQProps } from "@/app/types";
import { motion as m, AnimatePresence } from "framer-motion";

export default function Question({
  question,
  answer,
  isActive,
  handleClick,
}: FAQProps) {
  return (
    <div onClick={handleClick} className="w-full cursor-pointer">
      <div className="flex gap-4 text-[14px] md:text-[16px] justify-between w-full items-center mx-auto md:mx-0 max-w-[380px]">
        <h2
          className={`${
            isActive === question ? "font-bold text-dark-gray" : "text-gray"
          } transition-all`}
        >
          {question}
        </h2>
        <img
          src="/icon-arrow-down.svg"
          alt="arrow-icon"
          className={`${
            isActive === question ? "rotate-180" : ""
          } transition-all`}
        />
      </div>
      <AnimatePresence>
        {isActive === question && (
          <m.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1, originY: 0 }}
            exit={{ scaleY: 0, originY: 0 }}
          >
            <p className="pt-4 text-gray text-[12px] mx-auto md:mx-0 max-w-[260px]">{answer}</p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
