import TechnologiesCards from "./technologies/TechnologiesCards"
import type { Technology } from "./types/types"
import { use, useState } from "react"
import YourStack from "./technologies/yourStack"

interface TechnologiesProps {
    stacks: Promise<Technology[]>
}

export default function Technologies({ stacks }: TechnologiesProps) {
    const stacksList = use(stacks)

    const [stackAdded,setStackAdded] = useState<Technology[]>([])

    return (
      <section className="container mx-auto px-4 py-5 md:px-6 md:py-10 flex flex-col gap-5 text-center md:text-left md:items-start">
        <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl leading-tight">
          Explore the{" "}
          <span className="button-gradient bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <h3>Pick one technology per category to build your ideal stack.</h3>
        <div className="grid grid-cols-1  md:grid-cols-12 gap-4 container mx-auto">
          <TechnologiesCards
            stackList={stacksList}
            stackAdded={stackAdded}
            setStackAdded={setStackAdded}
          />
          <YourStack
            stackAdded={stackAdded}
            setStackAdded={setStackAdded}
          ></YourStack>
        </div>
      </section>
    );
}