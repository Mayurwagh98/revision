import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMusicRecords } from "../Redux/action";
import { useSelector } from "react-redux";

let MusicRecords = () => {
  let dispatch = useDispatch();
  let musicData = useSelector((store) => store.musicRecord); // getting music album data form store, as we store it using reducer
  console.log(musicData);

  useEffect(() => {
    getMusicRecords(dispatch);
  }, []);

  return (
    <>
      <h1>MusicRecords</h1>
      <div>
        {musicData.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <img src={item.img} alt={item.name} />
              </div>
              <div>{item.genre}</div>
              <div>{item.name}</div>
              <div>{item.year}</div>

            </div>
          );
        })}
      </div>
    </>
  );
};

export { MusicRecords };
