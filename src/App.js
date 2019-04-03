import React, { useReducer, useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AnotherPage from './pages/AnotherPage';
import { Context, initialState, mainReducer } from "./store/store";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PrivateRoute from './components/PrivateRoute';
import AccountService from './services/AccountService';


const initialUser = {
  user: {
    name: 'Jan',
    surname: 'Sechovec',
    userId: '12345'
  }
}

const App = () => {

  const [store, dispatch] = useReducer(mainReducer, initialState);
  const [user, setUser] = useState(initialUser);


  return (
    <MuiThemeProvider>
      <Context.Provider value={{ 
        store, dispatch, 
        userState: { user, setUser },
        services: { accountService: new AccountService()}
     }}>
        <BrowserRouter>
          <Switch>
            <PrivateRoute title="Dashboard" exact path="/" component={HomePage} />
            <Route path="/another" component={AnotherPage} />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    </MuiThemeProvider>
  );
}

export default App;
