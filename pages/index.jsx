import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import Contact from "@/components/Contact";
import GetQuote from "@/components/GetQuote";
import OurServices from "@/components/OurServices";
import Experience from "@/components/Experience";

import { BsArrowUpRight } from "react-icons/bs";

import Avatar_Black from "@/public/Avatar-black.svg";
import Avatar_White from "@/public/Avatar-white.svg";
import LogoBlack from "@/public/bajwa-logo-black.svg";
import LogoWhite from "@/public/bajwa-logo-white.svg";
import BooBlack from "@/public/boo-black.svg";
import BooWhite from "@/public/boo-white.svg";
import Logo from "@/public/bajwa-logo-white.svg";
import Link from "next/link";
import LearnMore from "@/components/LearnMore";
import CareerCard from "@/components/CareerCard";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [logo, setLogo] = useState(LogoBlack);

  useEffect(() => {
    setLogo(currentTheme === 'dark' ? LogoWhite : LogoBlack);
  }, [currentTheme]);

  // useEffect(() => {
  //   console.clear();
  //   console.log.apply(console, [
  //     "%c Designed and Developed by Pranjal Shikhar %c %c🚀 %c\n",
  //     "color: #fff; background: #8000ff; padding:5px 0;",
  //     "color: #fff; background: #242424; padding:5px 0 5px 5px;",
  //     "background: #242424; padding:5px 0",
  //     "background: #242424; padding:5px 5px 5px 0",
  //   ]);
  //   console.log.apply(console, [
  //     "%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n",
  //     "color: #fff; background: #8000ff; padding:5px 0;",
  //   ]);
  // }, []);




  return (
    <>
      <Head>
        <title>Bajwa Security</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          {/* <div className="flex flex-row justify-start items-center mt-20">
            <Image
              src={currentTheme === "dark" ? Avatar_White : Avatar_Black}
              alt="pranjal"
              width="80"
              height="80"
            />
            <div className="flex flex-col ml-4">
              <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
                <span className="font-semibold">pranjal shikhar</span>
                <span>
                  <Image
                    src={currentTheme === "dark" ? BooWhite : BooBlack}
                    alt="boo"
                    width="25"
                    height="25"
                  />
                </span>
              </h2>
              <h3>
                <Link
                  href={"https://www.linkedin.com/in/pranjalshikhar"}
                  target="_blank"
                  className="text-[#717171bb] flex items-center"
                >
                  <p>@pranjal</p>
                  <BsArrowUpRight className="stroke-1 h-3" />
                </Link>
              </h3>
            </div>
          </div> */}
          <div className="text-center mt-12 text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
            <p className="mt-20 text-3xl sm:leading-6 md:leading-6 lg:leading-8">
              Safety Evolved: Smarter, Stronger & Secure
            </p>
            {/* <p className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 sm:leading-6 md:leading-6 lg:leading-8">
              Safety Evolved: Smarter, Stronger & Secure
            </p> */}
            <div className="flex justify-center items-center mt-12">
              <Image src={logo} alt="white logo" width="250" />
            </div>
          </div>
        </div>
        {/* <div className="mt-28 mx-auto">
          <Experience />
        </div> */}
        <div className="mt-28 mx-auto ">
          <GetQuote />
        </div>
        <div className="mt-28 mx-auto ">
          <OurServices />
        </div>
        <div className="mt-28 mx-auto ">
          <LearnMore />
        </div>
        <div className="mt-28 mx-auto ">
          <CareerCard />
        </div>
      </div>
    </>
  );
}