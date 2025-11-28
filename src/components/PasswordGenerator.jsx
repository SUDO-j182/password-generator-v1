import { useState } from "react";
import { generatePassword, calculateStrength } from "../utils/passwordUtils";

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
    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      setPassword("");
      setStrength("weak");
      return;
    }
  
    const effectiveLength =
      typeof length === "number" && !Number.isNaN(length) ? length : 6;
  
    const options = {
      length: effectiveLength,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols,
    };
  
    const newPassword = generatePassword(options);
    const newStrength = calculateStrength(newPassword, options);
  
    setPassword(newPassword);
    setStrength(newStrength);
    setCopied(false);
  };
  
  const handleCopyPassword = () => {
    if (!password) return;

    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((error) => {
        console.error("Failed to copy password:", error);
        setCopied(false);
      });
  };

  return (
    <div className="password-generator">
      <h2>Secure Password Generator</h2>
  
      <section className="options">
        <label>
          Length:
          <input
            type="number"
            min={6}
            max={64}
            value={length}
            onChange={(event) => {
                const rawValue = event.target.value;
              
                // If the field is cleared (empty string), don't force anything yet
                if (rawValue === "") {
                  setLength("");
                  return;
                }
              
                let value = Number(rawValue);
              
                // Reject NaN (shouldn't happen with type=number, but safe)
                if (Number.isNaN(value)) {
                  return;
                }
              
                // Clamp between 6 and 64
                if (value < 6) value = 6;
                if (value > 64) value = 64;
              
                setLength(value);
              }}              
          />
        </label>
  
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
      </section>
  
      <section className="actions">
        <button onClick={handleGeneratePassword}>
          Generate Password
        </button>
  
        <button
          onClick={handleCopyPassword}
          disabled={!password}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </section>
  
      <section className="output">
        <p><strong>Password:</strong> {password || "—"}</p>
        <p><strong>Strength:</strong> {strength || "N/A"}</p>
      </section>
    </div>
  );
}

export default PasswordGenerator;
