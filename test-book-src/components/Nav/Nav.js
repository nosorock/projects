import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../App.css'

export const Nav = () => (
	<ul className="nav">
		<li>
			<NavLink className="nav-li" to="/">Главная страница</NavLink>
		</li>
		<li>
			<NavLink className="nav-li" to="/menu">Рецепты</NavLink>
		</li>
		<li>
			<NavLink className="nav-li" to="/colors">Карточки цветов</NavLink>
		</li>
		<li>
			<NavLink className="nav-li"to="/members">Список сотрудников</NavLink>
		</li>
		<li>
			<NavLink className="nav-li" to="/countries">Страны</NavLink>
		</li>
	</ul>
	)