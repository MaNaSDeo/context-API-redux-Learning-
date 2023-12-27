// Todo: Create & manage context in this file
import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: '',
    updateTheme: () => {},
})

export default function ThemeContextProvider({ children }) {
    // Todo: Add the component code (incl. dynamic context value)
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
    }
  
    const themeValue = {
      theme: theme,
      updateTheme: toggleTheme,
    }

    return <ThemeContext.Provider value={themeValue}>
        {children}
    </ThemeContext.Provider>
}
  