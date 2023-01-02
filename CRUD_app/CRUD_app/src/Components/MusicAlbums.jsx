import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMusicRecords } from "../Redux/action";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

let MusicAlbums = () => {
  let dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  let musicData = useSelector((store) => store.musicRecord); // getting music album data form store, as we store it using reducer
  console.log(musicData);
  let location = useLocation();

  useEffect(() => {
    if (location || musicData.length === 0) {
      let genre = searchParams.getAll("genre");
      let queryParams = {
        params: {
          genre: genre,
          _sort: searchParams.get("sortData") && "year",
          _order: searchParams.get("sortData")
        },
      };
      dispatch(getMusicRecords(queryParams)); // don't need to invoke getMusicRecords here,
    }

    // cause it will be invoked in thunk middleware itself
  }, [location.search]);

  return (
    <>
      {/* <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)"}}> */}
        {musicData.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <img src={item.img} alt={item.name} />
              </div>
              <div>{`Genre - ${item.genre}`}</div>
              <div>{item.name}</div>
              <div>{item.year}</div>
            </div>
          );
        })}
      {/* </div> */}
    </>
  );
};

export { MusicAlbums };
