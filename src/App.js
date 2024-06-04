import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Navbar } from './components/Navbar/Navbar';
import { Home} from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import { CustomerRouters } from './components/Routers/CustomerRouters';

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
          {/* <Navbar/> */}
          {/* <Home/> */}
          {/* <RestaurantDetails/> */}
          {/* <Cart/> */}
          {/* <Profile/> */}
          <CustomerRouters/>
      </ThemeProvider>
    </div>
  );
}

export default App;
