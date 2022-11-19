import { Logo } from "./svgs/svgs";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { default as loginImg } from "../public/assets/login-img.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <Logo
          width={100}
          height={50}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex  ">
          <li className="headerLink">Home</li>
          <li className="headerLink">Tv Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-small font-light text-white">
        <SearchIcon className=" hidden text-white w-6 h-6 sm:inline" />
        <p className="hidden lg:inline">kids</p>
        <BellIcon className="w-6 h-6 text-white" />
        {/* <Link href="/account"> */}
        <Image
          onClick={logout}
          src={loginImg}
          alt="/"
          className="cursor-pointer rounded-full"
        />
        {/* </Link> */}
      </div>
    </header>
  );
};

export default Header;
