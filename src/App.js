import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Navbar } from './components/Navbar/Navbar';
import { Home} from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
          <Navbar/>
          {/* <Home/> */}
          {/* <RestaurantDetails/> */}
          <Cart/>
      </ThemeProvider>
    </div>
  );
}

export default App;
