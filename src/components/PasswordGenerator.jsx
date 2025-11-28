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
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-md bg-slate-800 text-slate-100 rounded-xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center tracking-tight">
          Secure Password Generator
        </h2>

        {/* Options */}
        <section className="options space-y-4">
          {/* Length */}
          <label className="flex items-center justify-between text-sm">
            <span className="font-medium">Length</span>

            <input
              type="number"
              min={6}
              max={64}
              value={length}
              onChange={(event) => {
                const rawValue = event.target.value;

                if (rawValue === "") {
                  setLength("");
                  return;
                }

                let value = Number(rawValue);

                if (Number.isNaN(value)) {
                  return;
                }

                if (value < 6) value = 6;
                if (value > 64) value = 64;

                setLength(value);
              }}
              className="w-20 rounded-md bg-slate-900 border border-slate-700 px-2 py-1 text-right text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          {/* Checkboxes */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-300">
              Character options
            </h3>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className="h-4 w-4 rounded border-slate-600 bg-slate-900"
              />
              <span>Include lowercase</span>
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="h-4 w-4 rounded border-slate-600 bg-slate-900"
              />
              <span>Include uppercase</span>
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="h-4 w-4 rounded border-slate-600 bg-slate-900"
              />
              <span>Include numbers</span>
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="h-4 w-4 rounded border-slate-600 bg-slate-900"
              />
              <span>Include symbols</span>
            </label>
          </div>
        </section>

        {/* Actions */}
        <section className="actions flex items-center justify-between gap-3">
          <button
            onClick={handleGeneratePassword}
            className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold hover:bg-indigo-500
                       transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-50"
          >
            Generate Password
          </button>

          <button
            onClick={handleCopyPassword}
            disabled={!password}
            className="rounded-md border border-slate-600 px-3 py-2 text-sm hover:bg-slate-700
                       transition-colors disabled:opacity-40"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </section>

        {/* Output */}
        <section className="output space-y-3">
          <div className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2">
            <p className="text-xs text-slate-400 mb-1">Generated password</p>
            <p className="font-mono break-all text-sm">
              {password || "—"}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-300">Strength</span>
            <span
              className={
                strength === "strong"
                  ? "text-emerald-400 font-semibold"
                  : strength === "medium"
                  ? "text-amber-300 font-semibold"
                  : "text-red-400 font-semibold"
              }
            >
              {strength || "N/A"}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PasswordGenerator;

