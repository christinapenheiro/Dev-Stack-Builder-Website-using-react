import { useState } from "react";
import type { Technology } from "../types/types";
import { FaStar } from "react-icons/fa";

interface ICard {
    stack: Technology;
    stackAdded: Technology[];
    setStackAdded: React.Dispatch<React.SetStateAction<Technology[]>>
}

export default function Card({ stack,stackAdded,setStackAdded }: ICard) {

    const [button,setButton] = useState(false)

    const disableButton = () => {
        setButton(!button)
    }


    const stackAddedFunc = () => {
        const stackList = [...stackAdded,stack] 
        setStackAdded(stackList)
    }


    return (
      <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:h-120 2xl:h-100 flex flex-col justify-between">
        <div className="mb-4 flex items-center justify-between">
          <img src={stack.icon} alt={stack.name} className="h-14 w-14" />
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {stack.badge}
          </span>
        </div>
        <h3 className="mb-4 text-xl font-bold text-gray-900">{stack.name}</h3>
        <p className="mb-4 text-sm leading-6 text-gray-600">
          {stack.description}
        </p>
        <div className="divider mb-4"></div>
        <div className="mb-5 flex flex-wrap items-center gap-2 text-sm justify-between">
          <span className="rounded-md bg-gray-100 px-2 py-1 font-medium text-gray-700">
            {stack.category}
          </span>
          <span className="px-2 py-1 text-gray-600">{stack.difficulty}</span>
          <span className="flex items-center gap-1 font-medium text-gray-700">
            <FaStar className="text-yellow-400" />
            {stack.rating}
          </span>
        </div>
        <button
          className={`w-full rounded-lg ${button && `btn-disabled`} btn btn-neutral px-4 py-2.5 font-semibold text-white hover:bg-black cursor-pointer`}
          onClick={()=>{
            disableButton();
            stackAddedFunc();
          }}
        >
          {button ? `Added` : `Add to Stack`}
        </button>
      </div>
    );
}