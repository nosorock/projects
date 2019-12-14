import React from 'react';
import './App.css';

import Loader from './Loader/Loader'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Cat from './pages/Cat'
import {About} from './pages/About'
import {FootballPlayers} from './pages/Football'
import SimpleTask from './pages/SimpleTask'
import {Nav} from './Nav/Nav'
import {Fish} from './pages/Fish'
import MainPage from './pages/MainPage'
import ConvertTemp from './pages/ConvertTemp'

const gradients =  {
          one: 'linear-gradient(to top right, purple 10%, crimson 30%, orangered 50%, gold 75%)',
          two: 'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)',
          three: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)',
          four: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
          five: 'linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)'
      }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      gradient:  gradients.one
    }
    this.onClick = this.onClick.bind(this)
    this.backTheme = this.backTheme.bind(this)
  }

onClick() {
  this.setState({
    isLoading: false
  })
}


backTheme() {
    this.setState({
    gradient: 
    (this.state.gradient ===  gradients.one) ? gradients.two : 
    (this.state.gradient ===  gradients.two) ? gradients.three :
    (this.state.gradient ===  gradients.three) ? gradients.four : 
    (this.state.gradient ===  gradients.four) ? gradients.five :
    (this.state.gradient ===  gradients.five) ? gradients.one : null
  }) 
}

  render() {
    return (
      <BrowserRouter>
      <div className={'App'} style={{background: this.state.gradient}}>
      {
        this.state.isLoading ? 
        <Loader onClick={this.onClick} /> :
        <React.Fragment>
        <Nav />
        <Switch>
          <Route path={'/'} exact component = {MainPage} />
          <Route path={'/cat'} component = {Cat} />
          <Route path={'/about'} component = {About} />
          <Route path={'/simpletask'} component = {SimpleTask} />
          <Route path={'/footballplayers'} component = {FootballPlayers} />
          <Route path={"/fish"} component={Fish}/> 
          <Route path={"/convertTemp"} component={ConvertTemp}/>     
        </Switch>
        
        <button onClick={this.backTheme}>Выбрать тему</button>
        
        </React.Fragment>
      }
      </div>
      </BrowserRouter>
    )
  }
}

export default App
