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

  const handleGneneratePassword = () => {
    console.log("Generate clicked");
  }

  return (
    <div>
      <h2>PASS GEN PLACEHOLDER</h2>
    </div>
  );
}

export default PasswordGenerator;


