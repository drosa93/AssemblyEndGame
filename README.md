# 🕹️ Assembly: EndGame

A fast-paced letter-guessing game built with **Vite**, **React**, and **JavaScript**. Your mission: **guess the hidden word within 8 attempts**.

> 🔤 Featuring a database of 400+ unique words to challenge your memory, logic, and speed.

---

## 🎮 How to Play

- At the start of the game, a **random word** is selected.
- You have **8 chances** to guess the correct letters.
- Click or tap on letters using the **on-screen keyboard**.

### 🧠 Core Game Mechanics

- ✅ A word is randomly chosen at the start.
- 🔡 You guess **one letter at a time**.
- 🟩 Correct letters:
  - Fill in their exact position(s) in the word.
  - Turn **green** on the keyboard.
- 🟥 Incorrect letters:
  - Turn **red** on the keyboard.
  - Trigger a **toast notification** for feedback.
- 💥 You lose after 8 incorrect guesses.
- 🎉 Successfully guess all letters before running out of tries to win!

---

## ⚙️ Tech Stack

- 🧪 [Vite](https://vitejs.dev/) – Fast development build tool.
- ⚛️ [React](https://reactjs.org/) – UI library for dynamic rendering.
- 📜 JavaScript – Game logic and interactivity.

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/assembly-endgame.git

# Install dependencies
cd assembly-endgame
npm install

# Run the dev server
npm run dev



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
