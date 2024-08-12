import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loadCharts } from "services/api";
import { SectionTitle } from "components/ui/Typography";
import { Hero, Genres, Artists } from "components/HomePage";
import TracksTable from "components/TracksTable";
import { GreyTitle, TrendsAndArtistsSection, StyledAside } from "./styled";

// Import Swiper styles. I use it in genres and artists and to not double import to the 2 components it is better to import it one here.
import "swiper/css";
import "swiper/css/free-mode";
import { ContentWrapper } from "components/Layout";

function Home() {
  const [chart, setChart] = useState(); // attach date from API to the useState component, so I can render it on the screen.
  const [isLoading, setIsLoading] = useState(false); // this variable is for tracking when a component is loading to apply loading animation instead of an component

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true); // set variable that tracks loading of an component to true, as it this moment loading starts
        const data = await loadCharts(); //
        setChart(data); // Updating const 'genres' by data.data.data // 3 data because the first one is my const, the second and the third one is from api to get the data. // Also I use filter here to delete the first card with "wszystkie"
      } catch (err) {
        toast.error(err.message); // If error is catch call 'toast' from react-toastify
      } finally {
        setIsLoading(false); // loading has finished, so at the very end variable loading changes to false.
      }
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
          <TracksTable tracks={chart?.tracks?.data} />
        </div>
        <StyledAside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>

          <Artists isLoading={isLoading} artists={chart?.artists?.data} />
        </StyledAside>
      </TrendsAndArtistsSection>
    </ContentWrapper>
  );
}

export default Home;
