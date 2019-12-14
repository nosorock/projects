import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import '../App.css'

const fish = {
	fishs: [
	{number: 1, name: 'Окунь', lives: 'Река'},
	{number: 2, name: 'Морской ёж', lives: 'Море'},
	{number: 3, name: 'Щука', lives: 'Река'},
	{number: 4, name: 'Рыба-меч', lives: 'Океан'},
	{number: 5, name: 'Синий кит', lives: 'Океан'},
	{number: 6, name: 'Акула', lives: 'Океан'},
	],
	all: function() { return this.fishs},
	get: function(id) {
		const isFish = item => item.number === id
		return this.fishs.find(isFish)
	}
}

const FishItems = props => {
	const fishItem = fish.get(
		parseInt(props.match.params.number, 10))

	if (!fishItem) {
		return <div>Рыбы не найдено</div>
		}

	return (
		<div>
			<h1>Название рыбы: {fishItem.name} </h1>
			<h2>Номер: {fishItem.number}</h2>
			<h3>Среда обитания: {fishItem.lives}</h3>
			<Link className={'link'} to={"/fish"}>Назад</Link>
		</div>
		)
	}
	


const FishList = () => (
	<div>
		<h1>Список рыбок</h1>
		<ul>
			{fish.all().map(item => (
				<li 
				style={{listStyle: 'none'}}
				key={item.number}
				>
				Рыба: <Link to={`/fish/${item.number}`}>{item.name}</Link>,
				Среда обитания: {item.lives} 
				</li>
				))}
			<Link className={'link'} to="/">На главную</Link>
		</ul>
	</div>
	)

export const Fish = () => (
	<Switch>
		<Route exact path='/fish' component={FishList}/>
		<Route path='/fish/:number' component={FishItems}/>
	</Switch>
	)