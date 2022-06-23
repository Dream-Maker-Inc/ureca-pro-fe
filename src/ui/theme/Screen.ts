export enum ScreenType {
  xs = 376,
  sm = 576,
  md = 768, // Mobile
  lg = 900,
  xl = 1200, // Tablet
  xxl = 1440, // Laptop
}

export const ScreenTypes = Object.values(ScreenType).filter(
  (it) => typeof it === "number"
);
export const mq = ScreenTypes.map((bp) => `@media (max-width: ${bp}px)`);
