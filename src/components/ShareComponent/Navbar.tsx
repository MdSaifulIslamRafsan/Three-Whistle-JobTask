"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
interface NavlinksType {
    label: string,
    path: string,
    submenu?: {
        label: string,
        path: string,
    }[]
}

const Navbar = () => {

    const currentPath = usePathname();
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    const NavLinks : NavlinksType[] = [
        {
            label: 'About',
            path: '/about',
        },
        {
            label: 'Services',
            path: '/services',
            submenu: [
                { label: "Web Development", path: "/services/web-development" },
                { label: "SEO Optimization", path: "/services/seo-optimization" },
                { label: "Digital Marketing", path: "/services/digital-marketing" },
              ],
        },
        {
            label : "Case Study",
            path: '/caseStudy',
            submenu: [
                { label: "Project A", path: "/caseStudy/project-a" },
                { label: "Project B", path: "/caseStudy/project-b" },
              ],
        },
        {
            label: 'Contact',
            path: '/contact',
        },
    ]



  return (
    <nav
    className={`fixed top-0 z-50  w-full ${
      isScrolled ? "bg-base-300" : "bg-base-100"
    }`}
  > 
        <div className="navbar max-w-[1440px] w-[95%] md:w-11/12 lg:w-10/12 mx-auto">
    {/* Navbar Start */}
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          {NavLinks.map((link : NavlinksType) => (
            <li key={link.path}>
              <Link className={`${currentPath === link?.path && 'text-primary font-bold'}`} href={link.path}>{link.label}</Link>
              {link.submenu && (
                <ul className="p-2">
                  {link.submenu.map((sublink) => (
                    <li key={sublink.path}>
                      <Link className={`${currentPath === link?.path && 'text-primary font-bold'}`} href={sublink.path}>{sublink.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Link href="/">
        <Image src="/assets/Artboard 1@3x 1.png" alt="nav-logo"  width={140} height={50} />
      </Link>
    </div>

    {/* Navbar Center */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {NavLinks.map((link) => (
          <li key={link.path} className="relative">
            {link.submenu ? (
              <details>
                <summary>{link.label}</summary>
                <ul className="p-2 absolute left-0 bg-base-100 shadow-md rounded-box z-10">
                  {link.submenu.map((sublink) => (
                    <li key={sublink.path}>
                      <Link className={`${currentPath === link?.path && 'text-primary font-bold'}`} href={sublink.path}>{sublink.label}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link className={`${currentPath === link?.path && 'text-primary font-bold'}`} href={link.path}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>

    {/* Navbar End */}
    <div className="navbar-end">
      <Link href="/" className="btn px-5  sm:px-10 bg-primary rounded-full">Get in touch <FaArrowRight />
      </Link>
    </div>
  </div>
  </nav>
    
  );
};

export default Navbar;
