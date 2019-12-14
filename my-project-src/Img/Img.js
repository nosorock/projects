import React from 'react'
import img1 from './cat1.jpg'
import img2 from './cat2.jpg'
import img3 from './cat3.jpg'
import img4 from './cat4.jpg'
import './Img.css'


class Img extends React.Component {
	constructor(props) {
		super(props)
		this.state= {
			width: 300,
			height: 200, 

			value: 'Угадал!'
		}
		this.onClickHandler = this.onClickHandler.bind(this)
	}

	onClickHandler() {
		this.setState({
			width: 300*1.5+'px',
			height: 200*1.5+'px',
		})
		console.log(this.state.width, this.state.height)	
	}

	render() {
		return(
			<div>
				
				<img src={img1} className={'Img'} onClick={this.onClickHandler}/>
				<img src={img2} className={'Img'} onClick={this.onClickHandler}/>
				<img src={img3} className={'Img'} onClick={this.onClickHandler}/>
				<img src={img4} className={'Img'} onClick={() => this.props.stopTimer(this.state.value)}/>
			
				<h3>Кто из них не Чеширский кот?</h3>
			</div>
		) 
	}
}

export default Img