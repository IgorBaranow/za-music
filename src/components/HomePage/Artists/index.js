import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton"; // library with loading components
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper, ArtistsWrapper, ArtistsSkeletonWrapper, ArtistLoaderWrapper } from "./styled";
import ArtistsCard from "./ArtistsCard";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";

function Artists({ isLoading, artists }) {
  const { width } = useWindowSize;
  const isMobileLayout = width < breakpoints.md;
  return (
    <Wrapper>
      <ArtistsWrapper>
        {/* if isLoading == true show skeleton loaders.  */}
        {isLoading &&
          [...Array(8).keys()].map((num) => (
            <ArtistLoaderWrapper key={num}>
              <Skeleton
                wrapper={ArtistsSkeletonWrapper}
                key={num}
                height={isMobileLayout ? 75 : 95}
                width={isMobileLayout ? 75 : 95}
                borderRadius={50}
              />
              <Skeleton height={isMobileLayout ? 19 : 27} />
            </ArtistLoaderWrapper>
          ))}
        <Swiper slidesPerView="auto" spaceBetween={20} freeMode={true} modules={FreeMode}>
          {!isLoading &&
            artists?.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                <ArtistsCard name={genre.name} image={genre.picture_medium} />
              </SwiperSlide>
            ))}
        </Swiper>
      </ArtistsWrapper>
    </Wrapper>
  );
}

Artists.propTypes = {
  isLoading: PropTypes.bool,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture_medium: PropTypes.string,
    }),
  ),
};

export default Artists;
