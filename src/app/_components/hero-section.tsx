import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-screen relative flex justify-center items-center"
    >
      <div className="h-full w-full hidden sm:block relative">
        <Image
          src="/images/banner.png"
          alt="Hero Image"
          layout="fill" // required
          objectFit="cover"
        />
      </div>
      <div className="absolute z-10 text-center md:text-start sm:left-1/2 md:left-1/4 transform md:-translate-x-1/2 max-w-2xl">
        <h1 className="text-5xl md:text-7xl text-[#1a2a59] font-bold intersect:motion-preset-slide-down-lg  motion-delay-500 ">
          MAX I & US
        </h1>
        <div className="max-w-md mt-4 text-start intersect:motion-preset-slide-right-lg  motion-delay-1000">
          <p className="text-xl font-sans">
            Maxius is the only self-developed semiconductor company that focuses
            on developing High-Performance Servers. We provide specialized
            solutions tailored towards different sectors of the IT industry and
            strive to break into the global market as a leader in server
            technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
