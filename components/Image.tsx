import { ImageProps } from "@/app/types";

export default function Image({ desktopSrc, mobileSrc, alt, box }: ImageProps) {
  return (
    <div className="md:min-w-[472px]">
      <img
        src={desktopSrc}
        alt={`desktop-${alt}`}
        className="hidden md:block -translate-x-[15%] clip"
      />
      <img
        src={box}
        alt={`box-${alt}`}
        className="hidden md:block absolute left-0 top-[40%] translate-x-[-50%]"
      />
      <img src={mobileSrc} alt={`mobile-${alt}`} className="md:hidden mb-[-25%] translate-y-[-60%] w-[70%] max-w-[400px] mx-auto" />
    </div>
  );
}
