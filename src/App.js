import React, {useReducer} from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AnotherPage from './pages/AnotherPage';
import { Context, initialState, reducer } from "./store";
import { useDataApi } from './hooks/useDataApi';


const App = () => {

  const [store, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading, isError, doFetch } = useDataApi(
    {url:'http://hn.algolia.com/api/v1/search?query=redux', method:'GET'},
    { hits: [] },
  );
  
  return (
    <Context.Provider value={{ store, dispatch,
                              service:  { data, isLoading, isError, doFetch}
                               }}>
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
