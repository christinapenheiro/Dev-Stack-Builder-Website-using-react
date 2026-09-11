import type { Technology } from "../types/types";
import Card from "./card";

interface TechnologiesCards {
  stackList: Technology[];
  stackAdded: Technology[];
  setStackAdded: React.Dispatch<React.SetStateAction<Technology[]>>;
}

export default function TechnologiesCards({ stackList,stackAdded,setStackAdded }: TechnologiesCards) {
    


    return (
      <div className="md:col-span-8 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:justify-between items-center md:items-start">
        {stackList.map((stack) => (
          <Card
            key={stack.id}
            stack={stack}
            stackAdded={stackAdded}
            setStackAdded={setStackAdded}
          />
        ))}
      </div>
    );
}