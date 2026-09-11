import TechnologiesCards from "./technologies/TechnologiesCards"
import type { Technology } from "./types/types"
import { use } from "react"

interface TechnologiesProps {
    stacks: Promise<Technology[]>
}

export default function Technologies({ stacks }: TechnologiesProps) {
    const stacksList = use(stacks)

    return (
      <section className="container mx-auto px-4 py-5 md:px-6 md:py-10 flex flex-col gap-5 text-center md:text-left md:items-start">
        <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl leading-tight">
          Explore the{" "}
          <span className="bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <h3>Pick one technology per category to build your ideal stack.</h3>
        <TechnologiesCards stackList={stacksList} />
      </section>
    );
}