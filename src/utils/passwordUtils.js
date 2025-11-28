export function generatePassword({
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols,
}) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{};:,.<>?";

  let pool = "";

  if (includeLowercase) pool += lowercaseChars;
  if (includeUppercase) pool += uppercaseChars;
  if (includeNumbers) pool += numberChars;
  if (includeSymbols) pool += symbolChars;

  if (pool.length === 0) {
    return "";
  }

  let result = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * pool.length);
    result += pool[index];
  }

  return result;
}

export function calculateStrength(password, options) {
  if (!password) return "weak";

  let score = 0;

  const typesCount = [
    options.includeLowercase,
    options.includeUppercase,
    options.includeNumbers,
    options.includeSymbols,
  ].filter(Boolean).length;

  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (typesCount >= 2) score += 1;
  if (typesCount >= 3) score += 1;

  if (score <= 1) return "weak";
  if (score <= 3) return "medium";
  return "strong";
}
