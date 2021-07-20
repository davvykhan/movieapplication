import React from 'react';
import Header from './components/Header/Header';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Favourites from './Pages/Favourites/Favourites';
import Search from './Pages/Search/Search';
import NavItem from './components/NavItem'
import { Container } from '@material-ui/core';
import './App.css'


export default function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header />
    <div className="app">
     <Container>
     
      <Switch>
        <Route path='/' component={Trending} exact/>
        <Route path='/Movies' component={Movies} />
        <Route path='/Series' component={Series} />
        <Route path='/Favourites' component={Favourites} />
        <Route path='/Search' component={Search} />
      </Switch>
     
      </Container>
      </div>
      <NavItem />

      </BrowserRouter>

</>
  );
}
