import styled from "styled-components";
import { Text } from "components/ui/Typography";
import Button from "components/ui/Button";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 35px;
  border-radius: 25px;
  width: 100%;
  height: 382px;
  background-color: ${({ theme }) => theme.colors.purple};
`;

export const TextWrapper = styled.div`
  padding: 123px;
`;

export const HeroText = styled(Text)`
  max-width: 274px;
  display: block;
`;

export const PlayButton = styled(Button)`
  display: flex;
  gap: 14px;
  align-items: center;
`;
