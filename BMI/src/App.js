import "./App.css";
import { useState } from "react";

function App() {
  const [bmi, setBmi] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("There is no Message");

  let calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid Weight and Height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are UnderWeight 😕");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You Have a Healthy Weight 😃");
      } else {
        setMessage("You are OverWeight 😕");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
      imgSrc = require("./assets/underweight.png");
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require("./assets/healthy.png");
    } else {
      imgSrc = require("./assets/overweight.png");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="button-51" type="submit">
              Submit
            </button>
            <button
              className="button-52 btn-outline"
              onClick={reload}
              type="submit"
            >
              Reload
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is : {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
