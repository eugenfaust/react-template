import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex gap-2">
        <button
          className="border-2 p-2 hover:border-blue-400 hover:text-blue-600 transition-all duration-500"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span className="p-2 font-bold text-4xl">{count}</span>
        <button
          className="border-2 p-2 hover:border-blue-400 hover:text-blue-600 transition-all duration-500"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
