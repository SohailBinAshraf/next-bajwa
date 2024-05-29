import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import HeroCard from "@/components/HeroCard";

import LogoBlack from "@/public/bajwa-logo-black.svg";
import LogoWhite from "@/public/bajwa-logo-white.svg";
import ServiceCardImg from "@/public/our-services.jpeg";
import AboutCard from '@/public/about-us-card.jpg'
import CareerCardImg from '../public/career-card.jpeg'

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [logo, setLogo] = useState(LogoBlack);

  useEffect(() => {
    setLogo(currentTheme === 'dark' ? LogoWhite : LogoBlack);
  }, [currentTheme]);
    
  return (
    <>
      <Head>
        <title>Bajwa Security</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
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
       
        <div className="mt-28 mx-auto ">
          <HeroCard heading={'Get Quote for free!'} detail={'Take the first step towards a safer future. Get a free, no-obligation quote today and discover how we can tailor our services to meet your specific needs.'} caption={'Get Quote'} />
        </div>

        <div className="mt-28 mx-auto ">
          <HeroCard image={ServiceCardImg} alter={'service-card-image'} heading={'Our Services'} detail={'We offers comprehensive services, including state-of-the-art surveillance systems, 24/7 monitoring and highly trained security personnel to ensure the safety of your property and loved ones.'} caption={'All Services'} />
        </div>

        <div className="mt-28 mx-auto ">
          <HeroCard image={AboutCard} alter={'about-card-image'} heading={'About Us'} detail={'We provide tailored security solutions designed to meet the unique needs of residential, commercial and industrial clients. With our advanced technology and professional expertise you can trust us to deliver reliable and effective security measures for peace of mind.'} caption={'Learn More'} />
        </div>

        <div className="mt-28 mx-auto ">
          <HeroCard image={CareerCardImg} alter={'career-card-image'} heading={'We are expanding!'} detail={'Join our dynamic team at the forefront of the security industry! We offer exciting career opportunities for motivated individuals including positions in security operations, technology, and customer service.'} caption={'Apply Now'} />
        </div>        
      </div>
    </>
  );
}
