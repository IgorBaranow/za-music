import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton"; // this is a library with loaders, below I wrapped all my app into this library to use it and set styles
import { ToastContainer } from "react-toastify";
import { theme } from "styles/Theme";
import Home from "pages/Home"; // here I do not use {}, because Home is exported default.
import { GlobalStyles } from "styles/Global";
import Header from "./components/Header"; // the same, with default exporting don't use {}.
import Player from "components/Player";

// Import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css"; // this library is used in whole app, so that is why it is better to import it here in App.js
// Import react tostify css
import "react-toastify/dist/ReactToastify.css";

// Import rc-slider css
import "rc-slider/assets/index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme
        baseColor={theme.colors.secondaryBlack}
        highlightColor={theme.colors.lightWhite}
      >
        <GlobalStyles />
        <Header />
        <Home />
        <Player />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
