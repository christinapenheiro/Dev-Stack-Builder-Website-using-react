import type { Technology } from "../types/types";

export interface YourStack {
     stackList: Technology[];
}

export default function YourStack({ stackList }: YourStack) {
    
    return (
      <div className="md:col-span-3 w-full justify-center flex sm:block">
        <div className="w-full max-w-sm sm:max-w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="mb-2 text-xl font-bold text-gray-900">Your Stack</h3>
          <p className="mb-5 text-sm leading-6 text-gray-600">
            No technologies selected yet.
          </p>
          <div className="flex min-h-24 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 px-4 py-6">
            <span className="text-center text-sm font-medium text-gray-400">
            Your stack is empty.
            </span>
          </div>
          <button className="hidden px-12 py-0 font-semibold btn btn-outline btn-error">
            Remove All
          </button>
        </div>
      </div>
    );
}