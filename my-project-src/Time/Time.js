import React from 'react'
import './Time.css'
import Img from '../Img/Img'

class Time extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			seconds: 0,
		}
		this.tick = this.tick.bind(this)
	}

	tick() {
		this.setState({
			seconds: this.state.seconds + 1
		})
	}

	componentDidMount() {
		this.Timer = setInterval(this.tick , 1000)
	}


	stopTimer = value => {
		 this.setState({
		 	seconds: value
		 })
		 clearInterval(this.Timer)

	}

	render() {
		return(
				<div>
					<h2>Секунды: {this.state.seconds}</h2>
					<Img stopTimer = {this.stopTimer} />
				</div>
			)
	}
}

export default Time