import { createGlobalStyle } from "styled-components"; // Here, I am importing the createGlobalStyle function from the styled-components library. This function is used to create global styles that can be applied across your entire application.

const styled = { createGlobalStyle }; // object named styled with a property createGlobalStyle that references the createGlobalStyle function imported from styled-components.

export const GlobalStyles = styled.createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  // Overwrite rc-slider library default styles
  .rc-slider-handle-dragging {
    box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.white} !important;
  }
`;
