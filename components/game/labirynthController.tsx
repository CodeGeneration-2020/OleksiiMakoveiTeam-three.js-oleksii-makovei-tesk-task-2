import React from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import * as THREE from "three";
import {
  KEYBOARD_KEYS,
  MOVEMENT_SPEED,
  overallColors,
} from "../../lib/constants";

const LabirynthController = ({
  cameraRef,
  floorRef,
}: {
  cameraRef: React.RefObject<THREE.PerspectiveCamera>;
  floorRef: React.RefObject<THREE.Mesh>;
}) => {
  const [moveForward, setMoveForward] = React.useState(false);
  const [moveBackward, setMoveBackward] = React.useState(false);
  const [moveLeft, setMoveLeft] = React.useState(false);
  const [moveRight, setMoveRight] = React.useState(false);

  const { scene } = useThree((state) => state);
  scene.fog = new THREE.Fog(overallColors.WHITE, 0, 10);

  const raycaster = new THREE.Raycaster();

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case KEYBOARD_KEYS.UP:
          setMoveForward(true);
          break;
        case KEYBOARD_KEYS.LEFT:
          setMoveLeft(true);
          break;
        case KEYBOARD_KEYS.DOWN:
          setMoveBackward(true);
          break;
        case KEYBOARD_KEYS.RIGHT:
          setMoveRight(true);
          break;
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case KEYBOARD_KEYS.UP:
          setMoveForward(false);
          break;
        case KEYBOARD_KEYS.LEFT:
          setMoveLeft(false);
          break;
        case KEYBOARD_KEYS.DOWN:
          setMoveBackward(false);
          break;
        case KEYBOARD_KEYS.RIGHT:
          setMoveRight(false);
          break;
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  useFrame(({ camera }) => {
    if (moveForward) camera.translateZ(-MOVEMENT_SPEED);
    if (moveBackward) camera.translateZ(MOVEMENT_SPEED);
    if (moveLeft) camera.translateX(-MOVEMENT_SPEED);
    if (moveRight) camera.translateX(MOVEMENT_SPEED);

    raycaster.set(camera.position, new THREE.Vector3(0, -1, 0));
    const intersections = raycaster.intersectObjects([floorRef.current as any]);

    if (intersections.length > 0) {
      const { distance } = intersections[0];
      camera.position.setY(Math.max(-distance + -1520, 1.5));
    }
  });

  return <PointerLockControls camera={cameraRef.current as THREE.Camera} />;
};
export default LabirynthController;
