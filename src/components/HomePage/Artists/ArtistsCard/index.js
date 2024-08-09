import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Image, ArtistName } from "./styled";

// by default inside props there is 'props' but this 'props' keeps all props inside. My props in the case are 'backgroundImage' and 'name', so it is better to distracture these props these by using {}
function ArtistsCard({ image, name }) {
  return (
    <Wrapper>
      <Image src={image} alt={`${name}'s photo`} />
      <ArtistName>{name}</ArtistName>
    </Wrapper>
  );
}
ArtistsCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default ArtistsCard;
