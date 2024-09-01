export const breakpoints = {
  sm: 460, // for small mobiles
  md: 768, // for tablets and big mobiles
  lg: 1200, // for laptops and bigger tablets
  xl: 1920, // for big screens and monitors
};

// this one is used for max-width property, so I do not have to write every time in my styled components max-width. I can just declare all max-width here and use the across whole app.
export const device = {
  sm: `@media (max-width: ${breakpoints.sm}px)`,
  md: `@media (max-width: ${breakpoints.md}px)`,
  lg: `@media (max-width: ${breakpoints.lg}px)`,
  xl: `@media (max-width: ${breakpoints.xl}px)`,
};
