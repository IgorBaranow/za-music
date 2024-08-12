import React from "react";
import PropTypes from "prop-types";
import { Subtext } from "components/ui/Typography";
import {
  SongNumberText,
  Table,
  TableData,
  TableHead,
  TableHeading,
  TrackInfo,
  TrackInfoImage,
  TrackInfoTextWrapper,
  TrackSubText,
  TrackTitle,
  StyledIconButton,
  TableHeadingTime,
  Line,
  TrackRow,
  IconWrapper,
} from "./styled";
import { Heart, Play } from "components/ui/Icons";
import { formatSecondsToMSS } from "utils/time";

function TracksTable({ tracks }) {
  console.log(tracks);
  return (
    <Table cellSpacing={0}>
      <TableHead>
        <tr>
          <TableHeading first>
            <Subtext>#</Subtext>
          </TableHeading>
          <TableHeading>
            <Subtext>Song name</Subtext>
          </TableHeading>
          <TableHeadingTime>
            <Subtext>Time</Subtext>
          </TableHeadingTime>
          <TableHeading>
            <Subtext>Album name</Subtext>
          </TableHeading>
          <TableHeading>
            <Subtext>Actions</Subtext>
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colSpan={5} />
        </tr>
        {tracks?.map((track, index) => (
          <TrackRow key={track.id}>
            <TableData>
              <SongNumberText className="text">{String(index + 1).padStart(2, "0")}</SongNumberText>
              <IconWrapper className="icon">
                <Play />
              </IconWrapper>
            </TableData>
            <TrackInfo>
              <TrackInfoImage
                src={track.album.cover}
                alt={`${track.album.name}'s cover`}
              ></TrackInfoImage>
              <TrackInfoTextWrapper>
                <TrackTitle>{track.title}</TrackTitle>
                <TrackSubText>{track.artist.name}</TrackSubText>
              </TrackInfoTextWrapper>
            </TrackInfo>
            <TableData>
              <Subtext>{formatSecondsToMSS(track.duration)}</Subtext>
            </TableData>
            <TableData>
              <TrackSubText>{track.album.title}</TrackSubText>
            </TableData>
            <TableData>
              <StyledIconButton width={25} height={25}>
                <Heart />
              </StyledIconButton>
            </TableData>
          </TrackRow>
        ))}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      duration: PropTypes.number,
      preview: PropTypes.string,
      artist: PropTypes.shape({
        name: PropTypes.string,
      }),
      album: PropTypes.shape({
        title: PropTypes.string,
        cover: PropTypes.string,
      }),
    }),
  ),
};

export default TracksTable;
