import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMusicRecords } from "../Redux/action";
import { useDispatch } from "react-redux";

let FilterSort = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  //here passing searchParams.getAll("genre") because if user clicks on any cateogry,
  // and after that refreshes the page, the category should still be checked
  let [category, setCategory] = useState(searchParams.getAll("genre") || []);
  //   console.log(searchParams.getAll("genre"));
  let [sortData, setSortData] = useState(searchParams.get("sortData") || []);

  let handleFilter = (event) => {
    let option = event.target.value;
    //logic --> if the option is present in the category array, remove it,
    //else add it to the category array

    let newCategory = [...category]; //making the copy of the category
    if (newCategory.includes(option)) {
      //remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      // add it
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  console.log(category);

  let handleSort = (e) => {
    setSortData(e.target.value);
  };

  useEffect(() => {
    //used useEffect because every time user clicks on filter, search param should change and DOM should re-render

    let params = {};
    category && (params.genre = category);
    sortData && (params.sortData = sortData);
    setSearchParams(params);
  }, [category, setSearchParams, sortData]);

  return (
    <>
      <div>
        <h1>Filter</h1>
        <div>
          <input
            type="checkbox"
            value="K-Pop"
            defaultChecked={category.includes("K-Pop")}
            onChange={handleFilter}
          />
          <label>K-Pop</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Country"
            defaultChecked={category.includes("Country")}
            onChange={handleFilter}
          />
          <label>Country</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Pop"
            defaultChecked={category.includes("Pop")}
            onChange={handleFilter}
          />
          <label>Pop</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Heavy Metal"
            defaultChecked={category.includes("Heavy Metal")}
            onChange={handleFilter}
          />
          <label>Heavy Metal</label>
        </div>
        <h2>Sort</h2>
        <div onChange={handleSort}>
          <div>
            <input
              type="radio"
              value="asc"
              name="sortData"
              defaultChecked={sortData === "asc"}
            />
            <label>Ascending</label>
          </div>
          <div>
            <input
              type="radio"
              value="desc"
              name="sortData"
              defaultChecked={sortData === "desc"}
            />
            <label>Descending</label>
          </div>
        </div>
      </div>
    </>
  );
};

export { FilterSort };
