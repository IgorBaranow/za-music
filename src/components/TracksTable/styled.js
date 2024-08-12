import IconButton from "components/ui/IconButton";
import { Subtext, Text } from "components/ui/Typography";
import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryGrey};
  text-align: left;
`;

export const TableHeading = styled.th`
  padding: 30px 20px 30px ${(props) => (props.first ? "20px" : "0")};
`;

export const TrackRow = styled.tr`
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border-radius: 10px;
  &:hover {
    .text {
      display: none;
    }

    .icon {
      display: block;
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

export const TableHeadingTime = styled(TableHeading)`
  min-width: 140px;
`;

export const TableData = styled.td`
  padding: 10px 20px 10px 0;
`;

export const TrackInfo = styled(TableData)`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const TrackInfoTextWrapper = styled(TableData)`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

export const Line = styled.td`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(198, 198, 198, 0) 0%,
    #c6c6c6 50.54%,
    rgba(198, 198, 198, 0) 98.02%
  );
`;

export const IconWrapper = styled.div`
  margin: 0 auto;
  width: 20px;
  height: 20px;
  display: none;
`;
