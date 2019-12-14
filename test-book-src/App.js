import React from 'react';
import {Menu} from './components/Menu'
import {data} from './components/Recipe'
import './App.css';
import {StarRating} from './components/StarRating'
import ColorList from './components/ColorList'
import MemberList from './components/MemberList'
import {MainPage} from './components/MainPage'
import {Countries} from './components/Countries'
import {Nav} from './components/Nav/Nav'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

export const App =() => (
  <BrowserRouter>
    <div className="App">
    <Nav />
    <Switch>
      <Route path={"/"} exact component={MainPage} />
      <Route path={"/menu"} component={Menu} />
      <Route path={"/colors"} component={ColorList} />
      <Route path={"/members"} component={MemberList} />
      <Route path={"/countries"} component={Countries} />
    </Switch>
    </div>
  </BrowserRouter>
  ) 


