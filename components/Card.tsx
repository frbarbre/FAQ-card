"use client";

import { Image, FAQ } from ".";
import { motion as m } from "framer-motion";

export default function Card() {
  return (
    <m.div
      initial={{ scaleX: 0, scaleY: 0 }}
      animate={{ scaleX: 1, scaleY: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white w-full max-w-[1000px] md:h-screen md:max-h-[550px] rounded-2xl shadow-2xl"
    >
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col md:flex-row relative items-center h-full"
      >
        <Image
          mobileSrc="/illustration-women-online-mobile.png"
          desktopSrc="/illustration-woman-online-desktop.svg"
          alt="illustration"
          box="/illustration-box-desktop.svg"
        />
        <FAQ />
      </m.div>
    </m.div>
  );
}
