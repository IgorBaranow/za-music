import Slider from "rc-slider";
import {
  Wrapper,
  TrackInfoWrapper,
  TrackInfoTextWrapper,
  TrackImage,
  ArtistName,
  ControlsWrapper,
  ProgressWrapper,
  TrackTime,
  VolumeWrapper,
} from "./styled";
import { ContentWrapper } from "components/Layout";
import { Text } from "components/ui/Typography";
import IconButton from "components/ui/IconButton";
import { Play, SkipLeft, SkipRight, Volume } from "components/ui/Icons";
import { theme } from "styles/Theme";

const track = {
  id: 2893833601,
  title: "Who",
  title_short: "Who",
  title_version: "",
  link: "https://www.deezer.com/track/2893833601",
  duration: 170,
  rank: 989324,
  explicit_lyrics: false,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview: "https://cdn-preview-2.dzcdn.net/stream/c-24e0ebecbb78e1224a5b1c2568d3e331-1.mp3",
  md5_image: "7c653cf9471ae173c46a704d7433bd68",
  position: 1,
  artist: {
    id: 168047437,
    name: "Jimin",
    link: "https://www.deezer.com/artist/168047437",
    picture: "https://api.deezer.com/artist/168047437/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/b468c00b0d6ba7af3d95be530e1a2a08/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/b468c00b0d6ba7af3d95be530e1a2a08/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/b468c00b0d6ba7af3d95be530e1a2a08/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/b468c00b0d6ba7af3d95be530e1a2a08/1000x1000-000000-80-0-0.jpg",
    radio: true,
    tracklist: "https://api.deezer.com/artist/168047437/top?limit=50",
    type: "artist",
  },
  album: {
    id: 616626971,
    title: "MUSE",
    cover: "https://api.deezer.com/album/616626971/image",
    cover_small:
      "https://e-cdns-images.dzcdn.net/images/cover/7c653cf9471ae173c46a704d7433bd68/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://e-cdns-images.dzcdn.net/images/cover/7c653cf9471ae173c46a704d7433bd68/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://e-cdns-images.dzcdn.net/images/cover/7c653cf9471ae173c46a704d7433bd68/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://e-cdns-images.dzcdn.net/images/cover/7c653cf9471ae173c46a704d7433bd68/1000x1000-000000-80-0-0.jpg",
    md5_image: "7c653cf9471ae173c46a704d7433bd68",
    tracklist: "https://api.deezer.com/album/616626971/tracks",
    type: "album",
  },
  type: "track",
};

function Player(props) {
  return (
    <Wrapper>
      <ContentWrapper display="flex">
        <TrackInfoWrapper>
          <TrackImage src={track.album.cover} alt={`${track?.album.title}'s cover`} />
          <TrackInfoTextWrapper>
            <Text>{track.title}</Text>
            <ArtistName>{track.artist.name}</ArtistName>
          </TrackInfoTextWrapper>
        </TrackInfoWrapper>
        <ControlsWrapper>
          <IconButton>
            <SkipLeft />
          </IconButton>
          <IconButton width={55} height={55} withBackground>
            <Play />
          </IconButton>
          <IconButton>
            <SkipRight />
          </IconButton>
        </ControlsWrapper>
        <ProgressWrapper>
          <TrackTime>0:00</TrackTime>
          <Slider
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{
              border: "none",
              height: 20,
              width: 20,
              backgroundColor: theme.colors.white,
              marginTop: -6,
            }}
          />
          <TrackTime>2:30</TrackTime>
        </ProgressWrapper>
        <VolumeWrapper>
          <IconButton height={24} width={24}>
            <Volume />
          </IconButton>
          <Slider
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, backgroundColor: theme.colors.white }}
            railStyle={{ height: 8, backgroundColor: theme.colors.darkGrey }}
            handleStyle={{
              border: "none",
              height: 20,
              width: 20,
              backgroundColor: theme.colors.white,
              marginTop: -6,
            }}
          />
        </VolumeWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

Player.propTypes = {};

export default Player;
