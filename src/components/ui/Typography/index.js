import styled from "styled-components";

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: 60px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 90px;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 52.5px;
`;

export const SectionSubtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: 25px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 37.5px;
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 26.63px;
`;

export const Subtext = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: 24.2px;
`;

export const ButtonText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: 23px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 27.84px;
`;
