import { PerspectiveCamera } from "@react-three/drei";
import { initialPosition } from "../../lib/constants";

const LabirynthCamera = ({
  cameraRef,
}: {
  cameraRef: React.RefObject<THREE.PerspectiveCamera>;
}) => {
  return <PerspectiveCamera ref={cameraRef} position={initialPosition} />;
};
export default LabirynthCamera;
