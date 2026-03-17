import React,{useRef} from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Box from './App1.jsx';

const App = () => {
   const boxRef = useRef();
  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 200,
      duration: 1,
      rotation: 360,
    });
  },[]); 
  return (
    <div>
      <main>
        <div ref={boxRef} className="box">
        </div>
      </main>
       <Box/>
    </div>
  )
}

export default App;