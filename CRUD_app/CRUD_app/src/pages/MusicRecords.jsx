import styled from "styled-components";
import { FilterSort } from "../Components/FilterSort";
import { MusicAlbums } from "../Components/MusicAlbums";

let MusicRecords = () => {
  const Wrapper = styled.div`
    border: 1px solid red;
    display: flex;
    min-height: 100vh;
    `;
  const WrapperFilterSort = styled.div`
    width: 200px;
    border: 1px solid black;
  `;
  const WrapperMusicAlbum = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, max-content));
    justify-content: center;
    grid-gap: 10px;
    margin: 10px;
  `;
  return (
    <>
      <h1>MusicRecords</h1>
      <Wrapper>
        <WrapperFilterSort>
          <FilterSort />
        </WrapperFilterSort>

        <WrapperMusicAlbum>
          <MusicAlbums />
        </WrapperMusicAlbum>
      </Wrapper>
    </>
  );
};

export { MusicRecords };
