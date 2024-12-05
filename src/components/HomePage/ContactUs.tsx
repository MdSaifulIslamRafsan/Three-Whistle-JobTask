import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section
      className="w-full relative bg-white flex items-center"
    >
       <Image src="/assets/Screenshot 2024-12-06 044516.png" alt="bottom-line" className="w-full absolute -top-3" width={2560} height={50} />
      <div className="max-w-5xl w-11/12 lg:w-10/12 space-y-5 text-black py-20 md:py-28 lg:py-40 xl:py-52 mx-auto">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold">
          Contact & Join Together
        </h1>
        <p className="md:text-lg lg:text-20 xl:text-2xl ">
          Molestiae beatae, rem luctus, penatibus enim eu repellendu porttitor
          officia. Porro lorem, recusandae conubia.
        </p>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="py-2 border border-black outline-none px-5 rounded-lg border-b-2 bg-white text-black w-full"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="py-2 border border-black outline-none px-5 rounded-lg border-b-2 bg-white text-black w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="py-2 border border-black outline-none px-5 rounded-lg border-b-2 bg-white text-black w-full"
          />
          <input
            type="text"
            placeholder="Phone No."
            className="py-2 border border-black outline-none px-5 rounded-lg border-b-2 bg-white text-black w-full"
          />
          <input
            type="text"
            placeholder="Your Subject."
            className="py-2 border border-black outline-none px-5 rounded-lg border-b-2 bg-white text-black w-full"
          />
          <textarea
            placeholder="Enter your massage...."
            className="border border-black outline-none bg-white text-black textarea-bordered rounded-lg border-b-2  textarea-lg w-full "
          ></textarea>
          <div className="flex justify-center">
      <button className="btn px-10 bg-primary hover:bg-primary text-white border-none rounded-full">Submit Now <FaArrowRight />
      </button>
    </div>
        </form>
      </div>
      <Image src="/assets/Screenshot 2024-12-06 044617.png" alt="bottom-line" className="w-full absolute -bottom-3" width={2560} height={50} />
    </section>
  );
};

export default ContactUs;
