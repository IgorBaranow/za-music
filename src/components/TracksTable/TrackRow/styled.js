import IconButton from "components/ui/IconButton";
import { Text, Subtext } from "components/ui/Typography";
import styled from "styled-components";

export const StyledTrackRow = styled.tr`
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border-radius: 10px;
  &:hover {
    .text {
      display: none;
    }

    .icon {
      display: inline-block;
    }
    background-color: ${({ theme }) => theme.colors.lightWhite};
  }

  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 20px;
  }

  td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const TableData = styled.td`
  padding: 10px 20px 10px 0px;
`;

export const TrackInfo = styled(TableData)`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px 10px 0;
`;

export const TrackInfoImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 15px;
`;
export const TrackTitle = styled(Text)`
  line-clamp: 1; // With this property I define how mane lines of text I wanna have. To make this work I also have to define display property to -webkit-box
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
export const TrackSubText = styled(Subtext)`
  line-clamp: 1;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
export const SongNumberText = styled(Subtext)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const StyledIconButton = styled(IconButton)`
  margin: 0 auto;
`;

export const IconWrapper = styled.div`
  margin: 0 auto;
  width: 20px;
  height: 20px;
  display: none;
`;
