import { ThemeProvider } from "styled-components";
import { theme } from "styles/Theme";
import Home from "pages/Home"; // here I do not use {}, because Home is exported default.
import { GlobalStyles } from "styles/Global";
import Header from "./components/Header"; // the same, with default exporting don't use {}.

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
