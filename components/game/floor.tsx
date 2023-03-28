/* eslint-disable react/display-name */
import React from "react";
import * as THREE from "three";
import {
  floorGeometry,
  floorPosition,
  floorRotation,
} from "../../lib/constants";

const Floor = React.forwardRef<THREE.Mesh>((props, ref) => {
  return (
    <mesh
      {...props}
      ref={ref}
      position={floorPosition}
      rotation={floorRotation}
    >
      <planeGeometry args={floorGeometry} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
});

export default Floor;
