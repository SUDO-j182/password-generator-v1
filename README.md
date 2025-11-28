# React Password Generator

A fully modernised password generator built with React and Vite, providing configurable password creation, strength evaluation, and clipboard support. The interface uses Tailwind CSS for a clean, responsive, and professional appearance.

---

**Status:** COMPLETE  
**Last Updated:** November 2025

---

## Tech Stack

- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS v4
- **Build & Tooling:** Vite
- **Password Logic:** Custom utility module
- **Clipboard Support:** `navigator.clipboard`

---

## Feature Coverage

| Feature                                                                | Status        |
|-------------------------------------------------------------------------|---------------|
| Password generation with multiple character options                     | Implemented   |
| Length selection with validation and clamping                           | Implemented   |
| Strength evaluation (weak / medium / strong)                            | Implemented   |
| Copy-to-clipboard functionality                                         | Implemented   |
| Component-based React architecture                                      | Implemented   |
| Logic extraction into separate modules                                  | Implemented   |
| Tailwind-styled responsive interface                                    | Implemented   |
| Clean project structure                                                 | Implemented   |
| Documentation                                                           | Included      |

---

## Functional Overview

### Character Options
Users may enable or disable:
- Lowercase characters  
- Uppercase characters  
- Numbers  
- Symbols  

Length is adjustable between **6 and 64 characters**, with input clamping to prevent invalid values.

### Strength Evaluation
Passwords are analysed using a simple scoring algorithm based on:
- Length brackets  
- Number of enabled character types  
- Overall entropy indicators  

Strength outputs:
- **weak**  
- **medium**  
- **strong**

### Clipboard Support
Passwords can be copied using the browser’s native Clipboard API.  
A brief status indicator (“Copied!”) confirms the action.

---

## Code Structure

### Components
**`PasswordGenerator.jsx`**
- Main interface
- Input controls and toggles
- Generation & copy actions
- Display of password and strength score
- Tailwind classes applied for styling

### Utilities
**`passwordUtils.js`**
- `generatePassword(options)`
- `calculateStrength(password, options)`

Isolating logic ensures clarity, reduces duplication, and improves maintainability.

---

## UI / Styling

### Tailwind CSS v4
- Simple, modern dark UI
- Responsive card-based layout
- Utility-first styling for consistency
- Sleek buttons, inputs, and status indicators

### Layout Features
- Centered full-screen container
- Rounded card wrapper
- Mono-spaced password output
- Clear spacing and structure

