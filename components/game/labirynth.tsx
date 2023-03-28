import React from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import LabirynthModel from "./labirynthModel";
import Floor from "./floor";
import LabirynthController from "./labirynthController";
import LabirynthCamera from "./labirynthCamera";

const containerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
};

const Labirynth = () => {
  const cameraRef = React.createRef<THREE.PerspectiveCamera>();
  const floorRef = React.useRef<THREE.Mesh>();

  return (
    <div style={containerStyle as any}>
      <Canvas
        onCreated={({ gl, scene }) => {
          gl.setClearColor("black");
          scene.background = new THREE.Color("black");
          scene.fog = new THREE.Fog("black", 10, 30);
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight />
        <directionalLight position={[0, 1, 0]} />
        <LabirynthModel />

        <LabirynthCamera cameraRef={cameraRef} />
        <Floor ref={floorRef as any} />
        <LabirynthController floorRef={floorRef as any} cameraRef={cameraRef} />
      </Canvas>
    </div>
  );
};

export default Labirynth;
