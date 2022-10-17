import './App.css';
import Home from './pages/home';

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "./assets/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Home/>
      </ThemeProvider>  
    </div>
  );
}

export default App;
