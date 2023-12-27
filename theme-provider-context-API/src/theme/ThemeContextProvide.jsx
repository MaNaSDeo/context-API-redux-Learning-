// Todo: Create & manage context in this file
import { createContext } from "react";

export const ThemeContext = createContext({
    theme: '',
    updateTheme: () => {},
})