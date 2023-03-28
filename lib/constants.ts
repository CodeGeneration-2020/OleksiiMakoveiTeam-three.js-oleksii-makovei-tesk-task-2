export const MOVEMENT_SPEED: number = 0.02;

export const KEYBOARD_KEYS = {
  UP: "KeyW",
  LEFT: "KeyA",
  DOWN: "KeyS",
  RIGHT: "KeyD",
};

export const overallColors = {
  WHITE: 0xffffff,
};

export const LIGHT_COLOR = "#faffe3";

export const initialPosition = [120, 10, 10] as const;

export const floorPosition = [0, -10, 0] as const;
export const floorRotation = [-Math.PI / 2, 0, 0] as any;
export const floorGeometry = [200, 200] as [number?, number?, number?, number?];

export const COLORS = {
  LIGHT: "light",
  DARK: "dark",
} as const;
