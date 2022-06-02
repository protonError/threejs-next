import * as THREE from "three";
import react, { useEffect } from "react";
import "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";

import Floor from "./components/Floor";
// animation

//create funtion for 3d camera

function Home() {
  return (
    <div className="scene">
      <Canvas
        shadows={true}
        className="canvas"
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}

export default Home;
