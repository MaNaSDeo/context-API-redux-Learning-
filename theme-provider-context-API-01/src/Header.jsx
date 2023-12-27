import { useContext } from "react";
import { ThemeContext } from "./theme/ThemeContextProvide";
export default function Header() {
  const { updateTheme } = useContext(ThemeContext)
  return (
    <header>
      <h1>Demo Website</h1>
      <button
        onClick={updateTheme}
      >Toggle Theme</button>
    </header>
  );
}