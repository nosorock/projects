import React from 'react'
import './Loader.css'

export default class Loader extends React.Component {
	render() {
		return (
			<div>
				<div onClick={() => this.props.onClick()} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
			</div>
		)
	}
}
			
