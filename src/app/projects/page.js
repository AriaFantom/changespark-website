import Image from "next/image";

const Projects = () => {
  const images = [
    {
      src: "/bhadreswar.jpg",
      alt: "Women at Tailoring",
      caption: "Women at Tailoringg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      src: "/goghat.jpg",
      alt: "Children at School",
      caption: "Children at School",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-20 md:py-0 justify-center min-h-screen w-full bg-background-100 ">
      <h1 className="text-5xl uppercase font-bold font-heading text-purple-900 mb-12">
        Projects
      </h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-40 ">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-start w-[450px]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              height={300}
              width={450}
              className="rounded-md shadow-md"
            />

            <h2 className="mt-4 uppercase font-bold text-xl font-paragraph text-green-700 text-center">
              {img.caption}
            </h2>
            <p className="text-wrap">{img.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
