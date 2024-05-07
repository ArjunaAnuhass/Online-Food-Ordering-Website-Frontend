import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Navbar } from './components/Navbar/Navbar';
import { Home} from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
          <Navbar/>
          {/* <Home/> */}
          <RestaurantDetails/>
      </ThemeProvider>
    </div>
  );
}

export default App;
