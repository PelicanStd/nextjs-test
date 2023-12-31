'use client';
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log('안녕 - 클라이언트');
  return (
    <>
      <p>{count}</p>
      <button
        className={"btn btn-primary"}
        onClick={() => setCount((num) => num + 1)}>
        Increment
      </button>
    </>
  )
}
