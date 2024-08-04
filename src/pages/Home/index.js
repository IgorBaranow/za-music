import { Hero } from "components/HomePage";
import { ContentWrapper } from "./styled";

// Wrapp every components with <ContentWrapper> component to have consistent styling, in this case padding for all main elements will be 120px and if I wanna change it, I can change it in just one place for every main component.
function Home() {
  return (
    <ContentWrapper>
      <Hero />
      <div>Genres</div>
      <div>Songs Table</div>
      <aside>Artist</aside>
    </ContentWrapper>
  );
}

export default Home;
