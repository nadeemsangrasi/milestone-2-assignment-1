import { IconBrandGmail, IconLocation } from "@tabler/icons-react";
import { Linkedin, Phone, X } from "lucide-react";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="bg-black text-gray-400  sm:px-12  mt-28 py-16 px-6 flex justify-between gap-4 flex-col md:flex-row">
        <div className="space-y-4  w-full sm:w-[400px]">
          <div>
            <h1 className="text-4xl font-semibold text-white">Rich Mart</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex illum
              perspiciatis ipsum nihil ducimus vero a eaque numquam accusamus,
            </p>
          </div>
        </div>
        <div className="sm:w-[400px] mx-auto">
          <h1 className="tracking-widest text-white text-2xl font-thin">
            {" "}
            Our Services
          </h1>
          <ul>
            <li className="text-lg flex gap-2 items-center">
              <span className="text-2xl font-medium">&gt;</span>
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-lg flex gap-2 items-center">
              <span className="text-2xl font-medium">&gt;</span>
              <Link href={"/#about"}>About</Link>
            </li>
            <li className="text-lg flex gap-2 items-center">
              <span className="text-2xl font-medium">&gt;</span>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="text-lg flex gap-2 items-center">
              <span className="text-2xl font-medium">&gt;</span>
              <Link href={"/products"}>Products</Link>
            </li>
          </ul>
        </div>
        <div className="sm:w-[400px] mx-auto">
          <h1 className="tracking-widest text-white text-2xl font-thin">
            {" "}
            Usefull Links
          </h1>
          <ul>
            <li className="text-lg flex gap-2 items-center">
              <span className="text-2xl font-medium">&gt;</span>
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-lg flex gap-2 items-center">
              <span className="text-2xl font-medium">&gt;</span>
              <Link href={"/#about"}>About</Link>
            </li>
            <li className="text-lg flex gap-2 items-center">
              <span className="text-2xl font-medium">&gt;</span>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="text-lg flex gap-2 items-center">
              <span className="text-2xl font-medium">&gt;</span>
              <Link href={"/products"}>Products</Link>
            </li>
          </ul>
        </div>
        <div className="sm:w-[400px] mx-auto">
          <h1 className="tracking-widest text-white text-2xl font-thin">
            {" "}
            Contact Us
          </h1>
          <ul className="space-y-2">
            <li className="text-lg flex gap-2 items-center mt-2">
              <span className="text-2xl font-medium">
                <IconLocation />
              </span>
              123 Street, New York, USA
            </li>
            <li className="text-lg flex gap-2 items-center">
              <span className="text-2xl font-medium">
                <Phone />
              </span>
              +012 345 67890
            </li>
            <li className="text-lg flex gap-2 items-center">
              <span className="text-2xl font-medium">
                <IconBrandGmail />
              </span>
              info@example.com
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black text-gray-400 border-t py-4 sm:px-3 md:px-5 ">
        <div className="sm:flex items-center justify-between">
          <div className=" text-center md:text-left mb-3 ">
            <p className="m-0 text-gray-400">
              Copyright &copy; <Link href="#">Domain</Link>. All Rights
              Reserved.
            </p>
          </div>
          <div className=" text-center md:text-right">
            <p className="m-0 text-gray-400">
              Designed by{" "}
              <Link href="#" className="text-primary-green ">
                Nadeem Khan
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
