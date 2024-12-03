import Image from "next/image";
import Link from "next/link";
import { FaArrowRight , FaFacebookF , FaBehance ,FaLinkedinIn , FaTwitter    } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
      <footer className="py-10">
        <section className="footer max-w-[1440px] w-[95%] md:w-11/12 lg:w-10/12 mx-auto  text-base-content py-10">
        <aside>
        <Link href="/">
        <Image src="/assets/Artboard 1@3x 1.png" alt="nav-logo" className={"w-40 h-10"} width={140} height={50} />
      </Link>
     <div className="py-4">
        <h6 className="font-bold text-lg opacity-100 text-white">Subscribe</h6>
          <p>
            Get latest news & events details
          </p>
     </div>

            <div className="flex items-center gap-3">
                 <input type="email" placeholder="Enter your email" className="input border-white input-bordered w-full max-w-xs" />
                <button className="p-5 bg-primary rounded-full"> <FaArrowRight />
                </button>
            </div>
            <div className="flex items-center py-4 gap-3">
                <Link className="p-3 text-white rounded-full bg-primary" href="/">
                    <FaFacebookF />

                </Link>
                <Link className="p-3 text-white rounded-full bg-primary" href="/">
                 <FaBehance />


                </Link>
                <Link className="p-3 text-white rounded-full bg-primary" href="/">
                     <FaLinkedinIn />


                </Link>
                <Link className="p-3 text-white rounded-full bg-primary" href="/">
                    <FaTwitter  />

                </Link>
           
            
            </div>



        </aside>

        <nav>
          <h6 className="footer-title opacity-100 text-white">Services</h6>
          <Link href="/" className="link link-hover">UI/UX</Link>
          <Link href="/" className="link link-hover">Website Dev</Link>
          <Link href="/" className="link link-hover">Mobile Dev</Link>
          <Link href="/" className="link link-hover">SEO</Link>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100 text-white">Resources</h6>
          <Link href="/" className="link link-hover">About us</Link>
          <Link href="/" className="link link-hover">Contact US</Link>
          <Link href="/" className="link link-hover">Our Services </Link>
          <Link href="/" className="link link-hover">Recent Work</Link>
          <Link href="/" className="link link-hover">Our FAQ’s</Link>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100 text-white">Contact Information</h6>
          <ul className="space-y-3">
            <li  className="flex gap-4 items-center"><MdPhoneInTalk  className="text-primary text-xl"/><span>+880 00000000</span></li>
            <li  className="flex gap-4 items-center">
            <MdOutlineEmail   className="text-primary text-xl"/> <span> yourgmail@gmail.com</span></li>
            <li className="flex gap-4 items-center"> 
                <CiLocationOn   className="text-primary text-xl"/> 
                <span>Your Location</span></li>
          </ul>
        </nav>
        </section>
        <div className="border-t border-white"></div>

        <div className="max-w-[1440px] w-[95%] md:w-11/12 lg:w-10/12 mx-auto pt-10 flex flex-col md:flex-row gap-5 text-xs sm:text-base justify-between items-center">
            <p>Copyright ⓒ Third Whistle, 2023. All rights reserved.</p>
            <div className="space-x-4 ">
                <Link href="/" className="link link-hover">Website Terms</Link>
              <Link href="/" className="link link-hover">Privacy Policy</Link>
              <Link href="/" className="link link-hover">Cookies Policy</Link>
            </div>
        </div>

      </footer>
    );
};

export default Footer;