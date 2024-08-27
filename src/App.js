import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton"; // this is a library with loaders, below I wrapped all my app into this library to use it and set styles
import { ToastContainer } from "react-toastify";
import { initialState, playerReducer } from "context/playerReducer";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { theme } from "styles/Theme";
import Home from "pages/Home"; // here I do not use {}, because Home is exported default.
import Search from "pages/Search";
import Layout from "components/Layout";
import { GlobalStyles } from "styles/Global";

// Import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css"; // this library is used in whole app, so that is why it is better to import it here in App.js
// Import react tostify css
import "react-toastify/dist/ReactToastify.css";

// Import rc-slider css
import "rc-slider/assets/index.css";
import Error from "pages/Error";

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme
            baseColor={theme.colors.secondaryBlack}
            highlightColor={theme.colors.lightWhite}
          >
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/search" element={<Search />} />
                {/* '*' means when non of the links are matches, then load the page with '*' */}
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
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
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;
