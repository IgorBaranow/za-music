import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import { SubText, Text } from "components/ui/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${PLAYER_HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  position: fixed;
  bottom: 0;
  left: 0%;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex["30"]};

  ${device.lg} {
    height: ${MOBILE_PLAYER_HEIGHT}px;
  }
`;

export const TrackInfoWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  min-width: 400px;
  padding-right: 15px;
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: left;
`;

export const TrackImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 15px;
`;

export const TrackTitle = styled(Text)`
  line-clamp: 1;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const ArtistName = styled(SubText)`
  line-clamp: 1;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  width: 100%;
`;

export const TrackTime = styled(SubText)`
  color: ${(props) => (props.grey ? props.theme.colors.secondaryGrey : "inherit")};
  margin: 0 20px;
  width: 80px;
`;

export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-left: 130px;
  min-width: 180px;
`;
