import React from 'react'
import Time from '../Time/Time'
import {Link} from 'react-router-dom'
import '../App.css'


export default class Cat extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			showCats: false
		}
    this.showCatsHandler = this.showCatsHandler.bind(this)
    this.showCatsHandlerFalse = this.showCatsHandlerFalse.bind(this)
	}

showCatsHandler() {
  this.setState({
    showCats: true
  })
}

showCatsHandlerFalse() {
  this.setState({
    showCats: false
  })
}

	render() {
		return (
			<div>
        		<h3>Нажми на кнопку "Показать котиков" и ответь на вопрос</h3>
        		<button className={'showCats'} onClick={this.showCatsHandler}>Показать котиков</button>
        		<button className={'showCatsFalse'} onClick={this.showCatsHandlerFalse}>Скрыть котиков</button>
        		{ this.state.showCats ? <Time /> : null }
        		<Link className={'link'} to="/">На главную</Link>
			</div>
		)
	}
} 
	