import React from 'react'
import Plans from '../Plans/Plans'
import {Link} from 'react-router-dom'
import '../App.css'



export default class SimpleTask extends React.Component {
	constructor() {
		super()
			this.state = {
			counter: 0,
			value: '',
			}
		this.updateCounter = this.updateCounter.bind(this)
		this.onChangeHandler = this.onChangeHandler.bind(this)		
	}

updateCounter(value) {
  this.setState({
    counter: this.state.counter + value
  })
}

onChangeHandler(event) {
  this.setState({
  	
    value: event.target.value
  })

}

	render() {
	return (
		<div>
			<h1>Простые задачки</h1>
			<div className="counter">
				<h3>Counter: {this.state.counter}</h3>
            	<button className={'button'}  onClick={() => this.updateCounter(-1)}>-1</button>
            	<button className={'button'}  onClick={() => this.updateCounter(+1)}>+1</button>
            </div>
            <div style={{marginTop: '20px'}}>
            	<input className={'input'} onChange={this.onChangeHandler} value={this.state.value}/>
            </div>
            <Plans />
        	<div>
        		<Link className={'link'} to="/">На главную</Link>
        	</div>
        </div>
		)
	}
}