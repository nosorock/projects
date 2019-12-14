import React from 'react'
import PlansList from './PlansList'
import './Plans.css'

class Plans extends React.Component {
 	constructor(props) {
 		super(props)
 		this.state={
 			items: [],
 			text: ''
 		}
 		this.onChangeHandler = this.onChangeHandler.bind(this)
 		this.SubmitHandler = this.SubmitHandler.bind(this)
 	}

 	onChangeHandler(event) {
 		this.setState({
 			text: event.target.value
 		}) 
 	}

 	SubmitHandler(event) {
 		event.preventDefault()

 		if (!this.state.text.length) { 
 			return
 		} 

 		const newItem = {
 			text: this.state.text,
 			id: Math.random()
 		}

 		this.setState(state => ({
 			items: state.items.concat(newItem),
 			text: ''
 		}))

 	}

	render() {
		return(
				<div className={'plans'}>
					<h3>Список планов</h3>
					
					<PlansList 
					items={this.state.items}
					/>

					<form onClick={this.SubmitHandler}>
						<label>Напиши сюда свои планы:  </label>
						
						<input 
						className={'Input'}
						onChange={this.onChangeHandler}
						value={this.state.text}/>
						
						<button 
						className={'Button'}
						>Добавить #{this.state.items.length + 1}
						</button>
					</form>
				</div>
		)
	}
}

export default Plans