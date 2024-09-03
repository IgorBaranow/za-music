import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home"; // here I do not use {}, because Home is exported default.
import Search from "pages/Search";
import Layout from "components/Layout";
import Error from "pages/Error";
import Genre from "pages/Genre";
import Artist from "pages/Artist";

function AppRouter() {
  return (
    <ErrorBoundary fallback={<Error isErrorPage />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/genres/:genreId" element={<Genre />} />
          <Route path="/artists/:artistId" element={<Artist />} />
          {/* '*' means when non of the links are matches, then load the page with '*' */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default AppRouter;
