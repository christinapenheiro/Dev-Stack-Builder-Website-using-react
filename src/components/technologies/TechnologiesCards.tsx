import type { Technology } from "../types/types";
import Card from "./card";

interface TechnologiesCards {
    stackList: Technology[];
}

export default function TechnologiesCards({ stackList }: TechnologiesCards) {
    
    return (
        <>
        {
            stackList.map((stack) => <Card key={stack.id} stack={stack} />)
        }
        </>
    )
}