import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton"; // library with loading components
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "components/ui/Icons";
import { SectionSubtitle } from "components/ui/Typography";
import GenreCard from "./GenreCard";
import {
  Wrapper,
  TitleRow,
  ButtonsWrapper,
  Button,
  GenresWrapper,
  GenreSkeletonWrapper,
} from "./styled";

// I can specify width and height here in props because I have props written in IconButton index.js file
function Genres() {
  const [genres, setGenres] = useState(); // attach date from API to the useState component, so I can render it on the screen.
  const [isLoading, setIsLoading] = useState(false); // this variable is for tracking when a component is loading to apply loading animation instead of an component

  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true); // set variable that tracks loading of an component to true, as it this moment loading starts
      const data = await axios.get("/genre?lang=en");
      setGenres(data.data.data.filter((genre) => genre.name.toLowerCase() !== "all")); // Updating const 'genres' by data.data.data // 3 data because the first one is my const, the second and the third one is from api to get the data. // Also I use filter here to delete the first card with "wszystkie"
      setIsLoading(false); // loading has finished, so at the very end variable loading changes to false.
    };
    loadData();
  }, []);

  return (
    <Wrapper>
      <TitleRow>
        <SectionSubtitle>Genres</SectionSubtitle>
        <ButtonsWrapper>
          <Button withBackground width={36} height={36} onClick={handlePrev}>
            <ArrowLeft />
          </Button>
          <Button withBackground width={36} height={36} onClick={handleNext}>
            <ArrowRight />
          </Button>
        </ButtonsWrapper>
      </TitleRow>
      <GenresWrapper>
        {/* if isLoading == true show skeleton loaders.  */}
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <Skeleton
              style={{ maxWidth: "100%" }}
              wrapper={GenreSkeletonWrapper}
              key={num}
              height={116}
              width={220}
              borderRadius={25}
            />
          ))}
        <Swiper
          ref={sliderRef}
          slidesPerView="auto"
          spaceBetween={20}
          freeMode={true}
          modules={FreeMode}
        >
          {!isLoading &&
            genres?.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                <GenreCard name={genre.name} backgroundImage={genre.picture_medium} />
              </SwiperSlide>
            ))}
        </Swiper>
      </GenresWrapper>
    </Wrapper>
  );
}

export default Genres;
