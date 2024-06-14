import Image from "next/image";
import Link from "next/link";

import corporate from '@/public/corporate-compr.jpeg'
import construction from '@/public/construction-compr.jpeg'
import retail from '@/public/retail-crop-compr.png'
import industry from '@/public/industry-compr.jpeg'
import warehouse from '@/public/warehouse-compr.jpeg'
import building from '@/public/building-compr.jpeg'
import reception from '@/public/reception-compr.jpeg'
import door from '@/public/door-compr.jpeg'
import dog from '@/public/dog-compr.jpeg'

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: corporate,
      title: "Corporate Security",
      description: "The impenetrable shield for your business.",
      link: "https://aizen.netlify.app/",
      target: "_self",
    },
    {
      id: 2,
      image: construction,
      title: "Construction Security",
      description: "The strongest defense for your construction project.",
      link: "https://kamui-kanban.netlify.app/",
      target: "_self",
    },
    {
      id: 3,
      image: retail,
      title: "Retail Security",
      description: "Security so good, It's practically invisible.",
      link: "https://pokedex-polly.netlify.app/",
      target: "_self",
    },
    {
      id: 4,
      image: industry,
      title: "Industrial Security",
      description: "Next-Level security for today's industry.",
      link: "https://evogymm.netlify.app/",
      target: "_blank",
    },
    {
      id: 5,
      image: warehouse,
      title: "Warehouse Security",
      description: "Securing your assets, streamlining your success.",
      link: "https://nikestore-polly.netlify.app/",
      target: "_blank",
    },
    {
      id: 6,
      image: building,
      title: "Building Security",
      description: "Building a connected future, with secure foundations.",
      link: "https://potion-write.vercel.app/",
      target: "_blank",
    },
    {
      id: 7,
      image: reception,
      title: "Reception Security",
      description: "Security done right, from morning to night.",
      link: "",
      target: "",
    },
    {
      id: 8,
      image: door,
      title: "Door Supervision",
      description: "Peace of mind you can find, with our security in mind.",
      link: "https://crytocurrencyhunter.netlify.app/",
      target: "_self",
    },
    {
      id: 9,
      image: dog,
      title: "Dog Security",
      description: "Security so good, it'll leave a paw print on your heart.",
      link: "https://red-eye.netlify.app/",
      target: "_self",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              // target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
