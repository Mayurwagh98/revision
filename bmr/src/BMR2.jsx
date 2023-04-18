import React, { useState } from "react";

const BMR2 = () => {
  let [bmr, setBmr] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male",
  });
  let [formula, setFormula] = useState(0);

  let handleBmr = (e) => {
    let { name, value } = e.target;
    setBmr({
      ...bmr,
      [name]: value,
    });
  };

  let calculateBmr = () => {
    if (bmr.gender == "male") {
      setFormula(
        88.362 + 13.397 * bmr.weight + 4.799 * bmr.height - 5.677 * bmr.age
      );
    } else if (bmr.gender == "female") {
      setFormula(447.6 + 9.2 * bmr.weight + 3.1 * bmr.height - 4.3 * bmr.age);
    }
  };

  return (
    <div>
      <h1>BMR2</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <select name="gender" onChange={handleBmr}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="text"
          placeholder="enter weight in kg"
          name="weight"
          onChange={handleBmr}
        />
        <input
          type="text"
          placeholder="enter height in cm"
          name="height"
          onChange={handleBmr}
        />
        <input
          type="text"
          placeholder="enter age in years"
          name="age"
          onChange={handleBmr}
        />
        <input type="submit" value="Submit" onClick={calculateBmr} />
      </form>

      <h2>Your BMR is:- {Math.round(formula)}</h2>
    </div>
  );
};

export { BMR2 };
