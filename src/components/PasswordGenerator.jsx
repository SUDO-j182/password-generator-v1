import { useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGeneratePassword = () => {
    console.log("Generate clicked");
    // we'll add real generation logic here next
  };

  return (
    <div>
      <h2>Secure Password Generator</h2>

      {/* Length control */}
      <div>
        <label>
          Length:
          <input
            type="number"
            min={6}
            max={64}
            value={length}
            onChange={(event) => setLength(Number(event.target.value))}
          />
        </label>
      </div>

      {/* Character options */}
      <div>
        <h3>Character options</h3>

        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(event) => setIncludeLowercase(event.target.checked)}
          />
          Include lowercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(event) => setIncludeUppercase(event.target.checked)}
          />
          Include uppercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(event) => setIncludeNumbers(event.target.checked)}
          />
          Include numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(event) => setIncludeSymbols(event.target.checked)}
          />
          Include symbols
        </label>
      </div>

      {/* Actions */}
      <div>
        <button onClick={handleGeneratePassword}>
          Generate Password
        </button>
      </div>

      {/* Output */}
      <div>
        <p>Password: {password || "—"}</p>
        <p>Strength: {strength || "N/A"}</p>
      </div>
    </div>
  );
}

export default PasswordGenerator;
