import { useState } from "react";
function RadioButtonComponent() {
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("Lahore");
  return (
    <>
      <h1>Handle Radio Button & DropDown</h1>
      <h4>Gender: </h4>
      <input
        type="radio"
        onChange={(e) => setGender(e.target.value)}
        name="gender"
        value={"male"}
        checked={gender == "male"}
        id="male"
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={(e) => setGender(e.target.value)}
        name="gender"
        value={"female"}
        checked={gender == "female"}
        id="female"
      />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender : {gender}</h2>
      <br></br> <br></br>
      <h4>Select City</h4>
      <select
        onChange={(e) => setCity(e.target.value)}
        defaultValue={"Islamabad"}
      >
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
      </select>
      <h2>Selected City : {city}</h2>
    </>
  );
}
export default RadioButtonComponent;
