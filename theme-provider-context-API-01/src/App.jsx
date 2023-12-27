import Page from './Page';
import ThemeContextProvider from './theme/ThemeContextProvide';

function App() {
  
  return(
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;