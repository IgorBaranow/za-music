import { useEffect, useState, useRef } from "react";
import Skeleton from "react-loading-skeleton"; // library with loading components
import { toast } from "react-toastify";
import { FreeMode } from "swiper/modules";
import { loadGenres } from "services/api";
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
import { Link } from "react-router-dom";
import { breakpoints } from "styles/BreakPoints";
import { useWindowSize } from "hooks/useWindowSize";

// I can specify width and height here in props because I have props written in IconButton index.js file
function Genres() {
  const { width } = useWindowSize();
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
      try {
        setIsLoading(true); // set variable that tracks loading of an component to true, as it this moment loading starts
        const data = await loadGenres(); //
        setGenres(data); // Updating const 'genres' by data.data.data // 3 data because the first one is my const, the second and the third one is from api to get the data. // Also I use filter here to delete the first card with "wszystkie"
      } catch (err) {
        toast.error(err.message); // If error is catch call 'toast' from react-toastify
      } finally {
        setIsLoading(false); // loading has finished, so at the very end variable loading changes to false.
      }
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
          [...Array(8).keys()].map((num) => (
            <Skeleton
              style={{ maxWidth: "100%" }}
              wrapper={GenreSkeletonWrapper}
              key={num}
              height={width < breakpoints.md ? 95 : 116}
              width={width < breakpoints.md ? 137 : 220}
              borderRadius={25}
            />
          ))}
        <Swiper
          ref={sliderRef}
          slidesPerView="auto"
          spaceBetween={width < breakpoints.md ? 9 : 20}
          freeMode={true}
          modules={FreeMode}
        >
          {!isLoading &&
            genres?.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                <Link to={`/genres/${genre.id}`}>
                  <GenreCard name={genre.name} backgroundImage={genre.picture_medium} />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </GenresWrapper>
    </Wrapper>
  );
}

export default Genres;
