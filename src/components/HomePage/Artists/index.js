import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton"; // library with loading components
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper, ArtistsWrapper, ArtistsSkeletonWrapper } from "./styled";
import ArtistsCard from "./ArtistsCard";

function Artists({ isLoading, artists }) {
  return (
    <Wrapper>
      <ArtistsWrapper>
        {/* if isLoading == true show skeleton loaders.  */}
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <Skeleton
              style={{ maxWidth: "100%" }}
              wrapper={ArtistsSkeletonWrapper}
              key={num}
              height={116}
              width={220}
              borderRadius={25}
            />
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
