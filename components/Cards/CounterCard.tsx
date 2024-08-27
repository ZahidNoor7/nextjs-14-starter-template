"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { increment, decrement } from "@/redux/Reducers/counterSlice";

const CounterCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

  return (
    <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h2 className="text-xl font-semibold mb-4 text-center dark:text-white">
        Counter
      </h2>
      <div className="flex flex-col items-center justify-center">
        <span className="text-5xl mb-8">{count}</span>

        <div className="flex items-center justify-between gap-4 w-full">
          <button
            className="bg-red-500 hover:bg-red-600 text-white rounded-md w-full h-10 flex items-center justify-center mr-2 transition-colors"
            onClick={handleDecrement}
          >
            <span className="dark:text-gray-100">Decrement -</span>
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded-md w-full h-10 flex items-center justify-center ml-2 transition-colors"
            onClick={handleIncrement}
          >
            <span className="dark:text-gray-100">Increment +</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
