import React, { useState } from "react";

const BMR = () => {
  let [weight, setWeight] = useState(0);
  let [height, setHeight] = useState(0);
  let [age, setAge] = useState(0);
  let [gender, setGender] = useState("male");
  let [bmr, setBmr] = useState(0);

  let handleCalculations = () => {
    if (gender == "male") {
      setBmr(88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age));
    } else if (gender == "female") {
      setBmr(447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age));
    }
  };
  return (
    <>
      <h1>BMR</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <select onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="text"
          placeholder="enter weight in kg"
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter height in cm"
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter age in years"
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Submit" onClick={handleCalculations} />
      </form>

      <h2>Your BMR is {Math.round(bmr)}</h2>
    </>
  );
};

export { BMR };
