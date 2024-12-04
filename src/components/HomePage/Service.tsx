import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Service = () => {
    return (
        <div>
             <Image src="/assets/line (2).png" alt="bottom-line" className="w-full" width={500} height={50} />
            <div className="py-32 flex justify-between flex-col items-center gap-5">
            <h4 className="text-lg font-bold">We’ll replay in 24 hrs</h4>
            <p className="text-lg font-bold">Only 2 slots left for new projects</p>
            <Link href="/" className="btn sm:px-10 bg-primary hover:bg-primary rounded-full">Get in touch <FaArrowRight className="hidden sm:block" />
      </Link>
            </div>
            <Image src="/assets/line (1).png" alt="bottom-line" className="w-full" width={500} height={50} />
        </div>
    );
};

export default Service;