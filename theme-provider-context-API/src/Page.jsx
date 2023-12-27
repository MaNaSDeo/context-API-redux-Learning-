import Header from './Header';

export default function Page({theme, toggleTheme}) {
  return (
    <div id="app" className={theme}>
      <Header toggleTheme={toggleTheme} />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
