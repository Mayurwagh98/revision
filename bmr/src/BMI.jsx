import React, { useState } from "react";

const BMI = () => {
  let [age, setAge] = useState(2);
  let [gender, setGender] = useState("male");
  let [height, setHeight] = useState(24);
  let [weight, setWeight] = useState(0);
  let [bmi, setBmi] = useState(0);
  let [category, setCategory] = useState("");

  let handleCompute = () => {
    let heightInches = height / 39.37;
    bmi = weight / (heightInches * heightInches);

    setBmi(bmi.toFixed(2));

    if (gender == "male") {
      if (bmi < 18.5) {
        setCategory("underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setCategory("normal weight");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setCategory("overweight");
      } else {
        setCategory("obesity");
      }
    } else if (gender == "female") {
      if (bmi < 20.5) {
        setCategory("underweight");
      } else if (bmi >= 20.5 && bmi <= 26.9) {
        setCategory("normal weight");
      } else if (bmi >= 27 && bmi <= 31.9) {
        setCategory("overweight");
      } else {
        setCategory("obesity");
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
        margin: "auto",
      }}
    >
      <h1>BMI</h1>
      <label>Age </label>
      <input
        type="number"
        min="2"
        max="100"
        placeholder="enter age"
        onChange={(e) => setAge(e.target.value)}
      />

      <label>Gender</label>
      <select name="gender" onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>Height</label>
      <input
        type="number"
        min="24"
        max="96"
        placeholder="enter height"
        onChange={(e) => setHeight(e.target.value)}
      />

      <label>Weight</label>
      <input
        type="number"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="enter weight"
      />

      <input type="submit" value="Compute" onClick={handleCompute} />

      <h3>BMI:- {bmi}</h3>
      <h3>category:- {category}</h3>
    </div>
  );
};

export { BMI };
