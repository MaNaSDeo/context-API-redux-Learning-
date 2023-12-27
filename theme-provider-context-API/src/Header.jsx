export default function Header({toggleTheme}) {
  return (
    <header>
      <h1>Demo Website</h1>
      <button
        onClick={toggleTheme}
      >Toggle Theme</button>
    </header>
  );
}
