import React from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { LIGHT_COLOR } from "../../lib/constants";

const LabirynthModel = () => {
  const [model, setModel] = React.useState<THREE.Object3D | null>(null);
  const gltf = useLoader(GLTFLoader, "map3.gltf");

  React.useEffect(() => {
    if (gltf) {
      const light = new THREE.AmbientLight(LIGHT_COLOR);
      gltf.scene.add(light);

      const map = gltf.scene.children[0];
      map.scale.set(0.5, 1, 0);
      setModel(gltf.scene);
    }
  }, [gltf]);

  return model ? <primitive object={model} /> : null;
};
export default LabirynthModel;
