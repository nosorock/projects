import React from 'react'
import fetch from 'isomorphic-fetch'

export class Countries extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			countryName: [],
			loading: false
		}
	}

componentDidMount() {
	this.setState({ loading: true})

fetch(`https://restcountries.eu/rest/v1/all`)  //важно запомнить!!!
  .then(response => response.json())    
  .then(array => array.map(country => country.name))  
  .then(countryName => this.setState({countryName, loading: false})) 
}

	render() {
		const {countryName, loading} = this.state
		return (
			(loading) ?
			<div>Загрузка стран...</div> :
				(!countryName.length) ?
					<div>Стран нет</div> :
					<ul>
						{countryName.map((x,i) => <li style={{listStyle: 'none'}} key={i}>{x}</li>)}
					</ul>

			)
	}
}
