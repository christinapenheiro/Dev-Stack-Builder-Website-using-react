import type { Technology } from "./types/types"
import { use } from "react"

export interface TechnologiesProps {
    stacks: Promise<Technology[]>
}

export default function Technologies({ stacks }: TechnologiesProps) {
    const stacksList = use(stacks)
    console.log(stacksList)

    return (
        <>
  
        </>
    )
}