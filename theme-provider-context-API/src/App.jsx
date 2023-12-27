import { useState } from 'react'; 
import Page from './Page';
import { ThemeContext } from './theme/ThemeContextProvide';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }

  const themeValue = {
    theme: theme,
    updateTheme: toggleTheme,
  }
  console.log(themeValue);
  return(
    <ThemeContext.Provider value={themeValue}>
      <Page />
    </ThemeContext.Provider>
  );
}

export default App;