import type { Technology } from "../types/types";
import Card from "./card";

interface TechnologiesCards {
    stackList: Technology[];
}

export default function TechnologiesCards({ stackList }: TechnologiesCards) {
    
    return (
        <div className="md:col-span-9 flex flex-col md:flex-none sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:justify-between items-center">
        {
            stackList.map((stack) => <Card key={stack.id} stack={stack} />)
        }
        </div>
    )
}