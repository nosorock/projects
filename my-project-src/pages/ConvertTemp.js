import React from 'react'

const scaleName = {
	c: 'Цельсия',
	f: 'Фаренгейта'
}

export default class ConvertTemp extends React.Component {
	state = {
		temperature: '',
		scale: 'c'
	}

onChangeHandlerCelsius(temperature) {
	this.setState({ temperature, scale: 'c'})
}

onChangeHandlerFahrenheit(temperature) {
	this.setState({ temperature, scale: 'f'})
}

	render() {
		const temperature = this.state.temperature
		const scale = this.state.scale
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
		return (
			<div>
				<TempInput scale='c' onChangeTemp={this.onChangeHandlerCelsius.bind(this)} temperature={celsius}/>
				<TempInput scale='f' onChangeTemp={this.onChangeHandlerFahrenheit.bind(this)} temperature={fahrenheit}/>
				<IfOneHangred celsius={parseFloat(celsius)}/>
			</div>
			)
	}
}


class TempInput extends React.Component {

onChangeHandler(e) {
	this.props.onChangeTemp(e.target.value)
}

	render() {
		return (
			<fieldset>
				<legend>Введите температуру в градусах {scaleName[this.props.scale]}</legend>
				<input onChange={this.onChangeHandler.bind(this)} value={this.props.temperature}/>
			</fieldset>
			)
	}
}


function IfOneHangred(props) {
	if(props.celsius >=100) {
		return <p>Вода закипит</p>
	}
	return <p>Вода не закипит</p>
}

function toCelsius(fahrenheit) {
	return (fahrenheit  - 32) * 5 / 9
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature)
	if(Number.isNaN(input)) return ''
	return (Math.round(convert(input) * 1000) / 1000).toString()
}