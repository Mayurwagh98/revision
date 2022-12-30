import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMusicRecords } from "../Redux/action";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

let MusicAlbums = () => {
  let dispatch = useDispatch();
  let [searchParams] = useSearchParams()
  let musicData = useSelector((store) => store.musicRecord); // getting music album data form store, as we store it using reducer
  console.log(musicData);

  useEffect(() => {
    let genre = searchParams.getAll("genre")
    let queryParams = {
      params: {
        genre: genre
      }
    }

    getMusicRecords(dispatch)
  }, []);

  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export { MusicAlbums };
