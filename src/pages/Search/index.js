import React, { useEffect, useState } from "react";
import { InputWrapper, NotFoundText, TableTitle, Wrapper } from "./styled";
import SearchIcon from "assets/search.svg";
import { toast } from "react-toastify";
import { search } from "services/api";
import TracksTable from "components/TracksTable";
import Input from "components/ui/Input";
import { SectionSubtitle, SectionTitle } from "components/ui/Typography";

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // TODO: Add debounce
    const loadData = async () => {
      try {
        setIsLoading(true); // set variable that tracks loading of an component to true, as it this moment loading starts
        const data = await search(searchQuery); //
        setTracks(data);
        console.log(data);
      } catch (err) {
        toast.error(err.message); // If error is catch call 'toast' from react-toastify
      } finally {
        setIsLoading(false); // loading has finished, so at the very end variable loading changes to false.
      }
    };
    if (searchQuery) loadData();
  }, [searchQuery]);
  return (
    <Wrapper>
      <InputWrapper>
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          startIcon={SearchIcon}
        />
      </InputWrapper>
      {searchQuery && (
        <div>
          <TableTitle>Results by: {searchQuery}</TableTitle>
          {(isLoading || (!isLoading && tracks?.length > 0)) && (
            <TracksTable isLoading={isLoading} tracks={tracks} />
          )}
        </div>
      )}
      {searchQuery && !isLoading && tracks?.length <= 0 && (
        <NotFoundText>Nothing was found :(</NotFoundText>
      )}
    </Wrapper>
  );
}

export default Search;
