

import ProjectCard from "@/components/ProjectCard";

export default function Services() {
  return (
    <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]">
      <main className="min-h-screen max-w-screen">
        <div className="pt-24 flex flex-col items-cen mx-auto">
          <h2
            className={
              "selection:text-black/40 dark:selection:text-white/40 bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold"
            }
          >
            Our Services
          </h2>
          <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
            We offers comprehensive services, including state-of-the-art surveillance systems,
            24/7/365 monitoring and highly trained security personnel to ensure the safety of your property and loved ones.
          </p>
        </div>
        <div className="mt-20 mb-20">
          <ProjectCard />
        </div>
      </main>
    </div>
  );
}
