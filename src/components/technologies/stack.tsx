import { toast } from "react-toastify";
import type { Technology } from "../types/types"
import { IoMdClose } from "react-icons/io";

export interface StackProps {
  stack: Technology;
  stackAdded: Technology[];
  setStackAdded: React.Dispatch<React.SetStateAction<Technology[]>>;
}

export default function Stack({ stack, stackAdded, setStackAdded}: StackProps) {
    
    const deleteStack = () => {
        const newStack = stackAdded.filter(stacks=>stacks.id !== stack.id)
        setStackAdded(newStack)
        toast.error(`${stack.name} removed from your stack.`);
        }


    return (
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm mt-2">
        <img
          src={stack.icon}
          alt={stack.name}
          className="h-10 w-10 rounded-lg object-contain"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{stack.name}</h4>
          <p className="text-sm text-gray-500">{stack.category}</p>
        </div>
        <button className="rounded-full p-2 text-gray-400 transition hover:text-red-500 cursor-pointer"
        onClick={deleteStack}><IoMdClose className="text-xl" /></button>
      </div>
    );
}