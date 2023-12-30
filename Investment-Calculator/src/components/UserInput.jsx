export default function UserInput({ userInput, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group"></div>
      <p>
        <label>Initial Investment</label>
        <input
          type="number"
          value={userInput.initialInvestment}
          required
          onChange={(event) =>
            onChangeInput("initialInvestment", event.target.value)
          }
        />
      </p>
      <p>
        <label>Annual Investment</label>
        <input
          type="number"
          value={userInput.annualInvestment}
          required
          onChange={(event) =>
            onChangeInput("annualInvestment", event.target.value)
          }
        />
      </p>
      <p>
        <label>Expected Return</label>
        <input
          type="number"
          value={userInput.expectedReturn}
          required
          onChange={(event) =>
            onChangeInput("expectedReturn", event.target.value)
          }
        />
      </p>
      <p>
        <label>Duration</label>
        <input
          type="number"
          value={userInput.duration}
          required
          onChange={(event) => onChangeInput("duration", event.target.value)}
        />
      </p>
    </section>
  );
}
