import styled from "styled-components";
import { Text } from "components/ui/Typography";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 14px;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 95px;
  width: 95px;
  border-radius: 50%;
`;

export const ArtistName = styled(Text)`
  max-width: 140px;
`;
