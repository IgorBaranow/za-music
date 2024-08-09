import { useEffect, useState } from "react";
import { SectionTitle } from "components/ui/Typography";
import axios from "axios";
import { Hero, Genres, Artists } from "components/HomePage";
import { ContentWrapper, GreyTitle, TrendsAndArtistsSection } from "./styled";

// Import Swiper styles. I use it in genres and artists and to not double import to the 2 components it is better to import it one here.
import "swiper/css";
import "swiper/css/free-mode";

function Home() {
  const [chart, setChart] = useState(); // attach date from API to the useState component, so I can render it on the screen.
  const [isLoading, setIsLoading] = useState(false); // this variable is for tracking when a component is loading to apply loading animation instead of an component

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true); // set variable that tracks loading of an component to true, as it this moment loading starts
      const data = await axios.get("/chart?lang=en");
      setChart(data.data); // Updating const 'genres' by data.data.data // 3 data because the first one is my const, the second and the third one is from api to get the data. // Also I use filter here to delete the first card with "wszystkie"
      setIsLoading(false); // loading has finished, so at the very end variable loading changes to false.
    };
    loadData();
  }, []);
  return (
    // Wrapp every components with <ContentWrapper> component to have consistent styling, in this case padding for all main elements will be 120px and if I wanna change it, I can change it in just one place for every main component.
    <ContentWrapper>
      <Hero />
      <Genres />
      <TrendsAndArtistsSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Tranding right now</SectionTitle>
          <div>songs table</div>
        </div>
        <aside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>

          <Artists isLoading={isLoading} artists={chart?.artists.data} />
        </aside>
      </TrendsAndArtistsSection>
    </ContentWrapper>
  );
}

export default Home;
