import { useState } from 'react'

export default function UserInput({ handleButton }) {

  const [userInput, setUserInput] = useState("");

  function handleInputChange(newValue) {
    setUserInput(newValue);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <textarea
            value={userInput}
            required
            onChange={(event) =>
                handleInputChange(event.target.value)
            }
            rows="3"
            cols="70"
          />
        </p>
        <p>
          <button onClick={() => handleButton(userInput)}>Analyze</button>
        </p>
      </div>
    </section>
  );
}
