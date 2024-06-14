import Image from "next/image";

import Second from '../public/second-compr.jpeg'
import AboutImg from '@/public/about-compr.jpeg'

export default function About() {

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col ">
            <h1
              className={`mt-6 bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold`}
            >
              About
            </h1>
          <p className="mt-8 max-w-xl text-justify md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
              At Bajwa Security, we provide comprehensive protection services tailored to meet the unique needs of our clients, 
              ensuring peace of mind with our state-of-the-art technology and expert team. 
              
          </p>
          <div className="flex items-center justify-center">
            <Image src={AboutImg} alt="about" width={600} className="rounded-lg mt-6" />
          </div>
            <p className="mt-8 max-w-xl text-justify md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
              
              Trust us to safeguard your assets and enhance your security infrastructure.
              We leverage cutting-edge technology to deliver comprehensive security.
              Our innovative approach keeps you protected in a constantly evolving world.
            </p>
          <div className="flex items-center justify-center">
            <Image src={Second} alt="about" width={600} className="rounded-lg mt-6" />
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
