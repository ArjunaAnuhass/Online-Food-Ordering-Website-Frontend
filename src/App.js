import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';

import { CustomerRouters } from './components/Routers/CustomerRouters';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './components/State/Authentication/Action';
import { store } from './components/State/Store';
import { findUserCart } from './components/State/Cart/Action';

function App() {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store)=>store);

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
    dispatch(findUserCart(jwt))
  },[auth.jwt])


  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
          {/* <Navbar/>
          <Home/> */}
          {/* <RestaurantDetails/> */}
          {/* <Cart/> */}
          {/* <Profile/> */}
          <CustomerRouters/>
      </ThemeProvider>
    </div>
  );
}

export default App;
