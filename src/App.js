import React, {useReducer} from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AnotherPage from './pages/AnotherPage';
import { Context, initialState, reducer } from "./store";


const App = () => {

  const [store, dispatch] = useReducer(reducer, initialState);
  
  return (
    <Context.Provider value={{ store, dispatch }}>
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
