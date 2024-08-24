import React from "react";
import PropTypes from "prop-types";
import { Wrapper, GenreName } from "./styled";

// by default inside props there is 'props' but this 'props' keeps all props inside. My props in the case are 'backgroundImage' and 'name', so it is better to distracture these props these by using {}
function GenreCard({ backgroundImage, name }) {
  return (
    <Wrapper image={backgroundImage}>
      <GenreName>{name}</GenreName>
    </Wrapper>
  );
}
GenreCard.propTypes = {
  backgroundImage: PropTypes.string,
  name: PropTypes.string,
};

export default GenreCard;
