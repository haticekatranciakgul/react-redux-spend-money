import './App.css';
import Home from './pages/Home';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Home/>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
