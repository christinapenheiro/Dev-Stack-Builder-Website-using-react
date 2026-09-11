import { toast } from "react-toastify";
import type { Technology } from "../types/types";
import Stack from "./stack";

export interface YourStack {
  stackAdded: Technology[];
  setStackAdded: React.Dispatch<React.SetStateAction<Technology[]>>;
}

export default function YourStack({ stackAdded,setStackAdded }: YourStack) {


    const removeAll = () => {
        setStackAdded([]);
        toast.warn(`Removed all items from stack.`)
    }

    
    return (
      <div className="col-span-full  md:col-span-4 sm:max-w-full sm:mx-0 flex justify-center md:block">
        <div className="w-full max-w-sm sm:max-w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="mb-2 text-xl font-bold text-gray-900">Your Stack</h3>
          {stackAdded.length === 0 ? (
            <p className="mb-5 text-sm leading-6 text-gray-600">
              {" "}
              No technologies selected yet.
            </p>
          ) : (
            <p className="mb-5 text-sm leading-6 text-gray-400">
              {stackAdded.length} Technology Selected.
            </p>
          )}
          {stackAdded.length === 0 ? (
            <div className="flex min-h-24 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 px-4 py-6">
              <span className="text-center text-sm font-medium text-gray-400">
                Your stack is empty.
              </span>
            </div>
          ) : (
            stackAdded.map((stack) => (
              <Stack
                key={stack.id}
                stack={stack}
                stackAdded={stackAdded}
                setStackAdded={setStackAdded}
              ></Stack>
            ))
          )}
          <button
            className={`${stackAdded.length > 0 ? `visible` : `hidden`} w-full rounded-lg  px-4 py-2.5 font-semibold cursor-pointer btn btn-outline btn-error mt-4`} onClick={removeAll}
          >
            Remove All
          </button>
        </div>
      </div>
    );
}