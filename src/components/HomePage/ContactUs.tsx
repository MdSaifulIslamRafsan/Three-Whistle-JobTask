import { FaArrowRight } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section
      style={{ backgroundImage: 'url("/assets/bg.svg")' }}
      className="w-full bg-center bg-cover"
    >
      <div className="max-w-2xl w-[95%] lg:w-full py-20 md:py-40 space-y-5 text-black mx-auto">
        <h1 className="text-2xl text-center sm:text-3xl md:text-5xl font-bold">
          Contact & Join Together
        </h1>
        <p>
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
    </section>
  );
};

export default ContactUs;
