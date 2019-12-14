import React from 'react'

export const logColor = (title, color) => (
	console.log(`New Color ${title} ${color}`)
)

export default class AddColor extends React.Component {
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this)
	}

onSubmit(e) {
	const { _title, _color } = this.refs
	this.props.onNewColor(_title.value, _color.value)
	e.preventDefault()
	_title.value = ''
	_color.value = '#000000'
	_title.focus()
}	

	render() {
		return (
			<div style={{border: '1px solid red', padding: '10px', display: 'inline-block', margin: '20px' }}>
			<form onSubmit={this.onSubmit}>
				<input ref="_title" required/>
				<input ref="_color" required/>
				<button>ADD</button>
			</form>
			</div>
		)
	}
}