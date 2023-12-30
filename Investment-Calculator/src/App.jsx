import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isVaildInput = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!isVaildInput && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {isVaildInput && <Results userInput={userInput} />}
    </>
  );
}

export default App;
