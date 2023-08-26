import { useState, useEffect } from "react";
export default function Form() {
  const [data, setData] = useState("");
  const [model, setModel] = useState("");
  useEffect(() => {
    if (data > 10) {
      console.log("form is invalid");
    }
  }, [data]);
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const clickMe = (e) => {
    setModel();
  };

  return (
    <div>
      <h2>The Select Element</h2>
      <p>The select element defines a drop-down list:</p>
      <form action="/action_page.php">
        <label for="car">choose a car:</label>
        <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">saab</option>
          <option value="Fiat">Fiat</option>
          <option value="Audi">Audi</option>
          <option value="Alto">Alto</option>
        </select>
        <div>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            placeholder="name"
          />
        </div>
        kavita: {data}
      </form>

      <div>NEW PROJECT</div>
      <div>MODEL EXAMPLE</div>
      <button className="model">OPEN MODEL</button>
    </div>
  );
}
