import { useState } from 'react'; 
import Page from './Page';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }
  return(
    <Page theme={theme} toggleTheme={toggleTheme} />);
}

export default App;
