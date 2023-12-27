// Todo: Create & manage context in this file
import { createContext } from "react";

// export default function ThemeContextProvider() {
//     // Todo: Add the component code (incl. dynamic context value)
//     function toggleTheme(currentMode){
//         if(currentMode === 'dark'){
//             console.log('light');
//         } else if(currentMode === 'light'){
//             console.log('dark');
//         }
//     }
//   }

export const ThemeContext = createContext({
    theme: 'dark'
})