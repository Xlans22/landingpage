import Image from "next/image";
import Illustration from "@/public/images/page-illustration.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

export default function PageIllustration({
  multiple = true,
}: {
  multiple?: boolean;
}) {
  return (
    <>
      {/* Top Hero Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/4"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={Illustration}
          width={846}
          height={594}
          alt="Page illustration"
          priority
        />
      </div>

      {/* Middle & Lower Ambient Shapes */}
      {multiple && (
        <>
          <div
            className="pointer-events-none absolute left-1/2 top-[400px] -z-10 -mt-20 -translate-x-full opacity-50"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={BlurredShapeGray}
              width={760}
              height={668}
              alt="Blurred shape gray"
            />
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-[440px] -z-10 -translate-x-1/3"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={BlurredShape}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-[1200px] -z-10 -translate-x-1/2 opacity-70"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={SecondaryIllustration}
              width={1165}
              height={1012}
              alt="Secondary illustration"
            />
          </div>
        </>
      )}
    </>
  );
}
