import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styled";
import { SectionSubtitle } from "components/ui/Typography";

// by default inside props there is 'props' but this 'props' keeps all props inside. My props in the case are 'backgroundImage' and 'name', so it is better to distracture these props these by using {}
function GenreCard({ backgroundImage, name }) {
  return (
    <Wrapper backgroundImage={backgroundImage}>
      <SectionSubtitle>{name}</SectionSubtitle>
    </Wrapper>
  );
}
GenreCard.propTypes = {
  backgroundImage: PropTypes.string,
  name: PropTypes.string,
};

export default GenreCard;
