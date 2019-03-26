import React, {useReducer, useState} from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AnotherPage from './pages/AnotherPage';
import { Context, initialState, mainReducer } from "./store/store";

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
    <Context.Provider value={{ store, dispatch, userState: {user, setUser}}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/another" component={ AnotherPage }/>
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
