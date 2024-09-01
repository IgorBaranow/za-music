import { SectionSubtitle } from "components/ui/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 220px;
  height: 116px;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  padding: 5px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center center; // to align the image to the center of the container
    border-radius: 25px;
    opacity: 0.4;
  }

  ${device.md} {
    width: 137px;
    height: 95px;
  }
`;

export const GenreName = styled(SectionSubtitle)`
  z-index: ${({ theme }) => theme.zIndex["10"]};
`;
