import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import '../App.css'


const  PlayersAPI = {
		players: [
		{ number: 1, name: "Ben Blocker", position: "G" },
    	{ number: 2, name: "Dave Defender", position: "D" },
    	{ number: 3, name: "Sam Sweeper", position: "D" },
    	{ number: 4, name: "Matt Midfielder", position: "M" },
    	{ number: 5, name: "William Winger", position: "M" },
    	{ number: 6, name: "Fillipe Forward", position: "F" }
		],
		all: function() { return this.players},
		get: function(id) {
			const isPlayer = item => item.number === id
			return this.players.find(isPlayer)
		}
	} 


const Player = props => {
	const player = PlayersAPI.get(
		parseInt(props.match.params.number, 10))

	if(!player) {
		return <div>Извините, игрок не найден</div>
	}
	return (
		<div>
			<h1>Игрок {player.name} (#{player.number})</h1>
			<h2>Позиция: {player.position}</h2>
			<Link  className={'link'} to="/footballplayers">Назад</Link>
		</div>
		)
}


const Football = () => (
				<div>
					<h1>Футбол: список игроков</h1>
					<ul>
						{PlayersAPI.all().map(item => (
	 						<li 
	 						style={{listStyle:'none'}} 
	 						key={item.number}
	 						>
	 						<Link to={`/footballplayers/${item.number}`}>
	 						{item.name}
	 						</Link>
	 						</li>
	 						))
	 					}
					</ul>
					<Link className={'link'} to='/'>На главную</Link>
				</div>
			)


export const FootballPlayers = () => (
	<Switch>
		<Route  exact path='/footballplayers' component={Football}/>
		<Route path='/footballplayers/:number' component={Player}/>
	</Switch>
	)