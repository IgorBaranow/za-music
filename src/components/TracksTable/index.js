import React from "react";
import PropTypes from "prop-types";
import { Subtext } from "components/ui/Typography";
import { Table, TableHead, TableHeading, Line, TableHeadingTime } from "./styled";
import TrackRow from "./TrackRow";
import Skeleton from "react-loading-skeleton";

function TracksTable({ tracks, isLoading }) {
  return (
    <Table cellSpacing={0}>
      <TableHead>
        <tr>
          <TableHeading first>
            <Subtext>{isLoading ? <Skeleton /> : "#"}</Subtext>
          </TableHeading>
          <TableHeading>
            <Subtext>{isLoading ? <Skeleton /> : "Song name"}</Subtext>
          </TableHeading>
          <TableHeadingTime>
            <Subtext>{isLoading ? <Skeleton /> : "Time"}</Subtext>
          </TableHeadingTime>
          <TableHeading>
            <Subtext>{isLoading ? <Skeleton /> : "Album name"}</Subtext>
          </TableHeading>
          <TableHeading>
            <Subtext>{isLoading ? <Skeleton /> : "Actions"}</Subtext>
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colSpan={5} />
        </tr>
        {!isLoading &&
          tracks?.map((track, index) => <TrackRow key={track.id} track={track} index={index} />)}
        {isLoading && [...Array(9).keys()].map((num) => <TrackRow key={num} index={num} />)}
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
  isLoading: PropTypes.bool,
};

export default TracksTable;
