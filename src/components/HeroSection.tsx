import HeroImage from "../assets/banner-stack.png";

export default function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-5 md:flex-row md:gap-10 md:px-6 md:py-10">
      <div className="flex flex-col gap-5 text-center items-center  sm:w-full md:text-left md:w-[50%] md:items-start">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
          Build Your Ideal <br />
          <span className="button-gradient bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <h3 className="font-medium text-gray-500 leading-8 sm:text-lg">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </h3>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="btn w-full border-0 button-gradient text-white hover:text-white sm:w-auto">
            Explore Technologies
          </button>
          <button className="btn w-full border-gray-300 px-8 text-black button-gradient-hover hover:text-white sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center md:justify-end md:w-[50%]">
        <img
          src={HeroImage}
          alt="Hero image"
          className="w-full max-w-sm md:max-w-lg"
        />
      </div>
    </section>
  );
}
