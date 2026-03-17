import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Box() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".box", { x: 200, duration: 1 });
    },
    { scope: container } 
  );

  return (
    <div ref={container}>
      <div className="box" style={{ width: 100, height: 100, background: "green" }} >
        <h1>I am Sumit</h1>
      </div>
    </div>
  );
}
