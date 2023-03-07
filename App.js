import "./styles.css";
import React, { useState } from "react";

function validFloat(num) {
  return num.toString().match(/[+-]?[0-9]+(\.[0-9]+)?([Ee][+-]?[0-9]+)?/);
}

// Inline styling object
const style = {
  input: {
    width: "75px",
    textAlign: "right"
  },
  error: {
    color: "red",
    fontWeight: "bold"
  }
};

const Calculator = () => {
  const [operandOne, setOperandOne] = useState(0);
  const [operandTwo, setOperandTwo] = useState(0);
  const [result, setResult] = useState(0);
  const [errorText, setErrorText] = useState("");

  const handleOperandOneChange = (e) => {
    setOperandOne(e.target.value.trim());
  };

  const handleOperandTwoChange = (e) => {
    setOperandTwo(e.target.value.trim());
  };

  const calculate = (operator) => {
    const one = parseFloat(operandOne);
    const two = parseFloat(operandTwo);
    switch (operator) {
      case "+":
        setResult(one + two);
        break;
      case "-":
        setResult(one - two);
        break;
      case "*":
        setResult(one * two);
        break;
      case "/":
        setResult(one / two);
        break;
      default:
        return;
    }
  };

  console.log(operandOne);

  return (
    <div>
      <input value={operandOne} onChange={handleOperandOneChange} />
      <input value={operandTwo} onChange={handleOperandTwoChange} />
      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("*")}>*</button>
      <button onClick={() => calculate("/")}>/</button>
      <label> = </label>
      <input readOnly value={result} />
      <div style={style.error}>{errorText}</div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Lab5</h1>
      <Calculator />
    </div>
  );
}
