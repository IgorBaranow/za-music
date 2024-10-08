import TracksTable from "components/TracksTable";
import { Music } from "components/ui/Icons";
import { MainTitle, SmallText } from "components/ui/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { loadGenre } from "services/api";
import { SongsCountWrapper, TextWrapper, Wrapper } from "./styled";
import Skeleton from "react-loading-skeleton";
import { theme } from "styles/Theme";

function Genre() {
  const { genreId } = useParams();
  const [genre, setGenre] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const genre = await loadGenre(genreId);
        setGenre(genre);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>{genre?.genre?.name || <Skeleton width={150} />}</MainTitle>
        <SongsCountWrapper>
          <Music color={theme.colors.secondaryGrey} />
          <SmallText>
            {isLoading ? <Skeleton width={40} /> : `${genre?.tracks?.length} songs`}
          </SmallText>
        </SongsCountWrapper>
      </TextWrapper>
      <TracksTable isLoading={isLoading} tracks={genre?.tracks} />
    </Wrapper>
  );
}

export default Genre;
