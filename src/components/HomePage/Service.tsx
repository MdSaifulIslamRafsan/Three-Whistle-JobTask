import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Service = () => {
  return (
    <section className="pt-20 md:pt-24 xl:pt-40">
      <Image
        src="/assets/line (2).png"
        alt="bottom-line"
        className="w-full"
        width={2560}
        height={50}
      />
      <div className="h-[500px] flex justify-center  items-center  max-w-xl w-full mx-auto">
        <div
          style={{
            backgroundImage: "url('/assets/Frame 427321669.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[420px]  flex justify-center flex-col items-center gap-10"
        >
          <h4 className="text-lg md:text-xl lg:text-[40px] font-bold text-white">We’ll reply in 24 hrs</h4>
          <p className="md:text-lg lg:text-[32px]  text-white">Only 2 slots left for new projects</p>
          <Link
            href="/"
            className="btn sm:px-10 bg-primary hover:bg-primary rounded-full text-white"
          >
            Get in touch <FaArrowRight className="hidden sm:block" />
          </Link>
        </div>
      </div>
      <Image
        src="/assets/line (1).png"
        alt="bottom-line"
        className="w-full"
        width={2560}
        height={50}
      />
    </section>
  );
};

export default Service;
