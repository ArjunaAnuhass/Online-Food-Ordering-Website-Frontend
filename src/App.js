import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
          <Navbar/>
      </ThemeProvider>
    </div>
  );
}

export default App;
