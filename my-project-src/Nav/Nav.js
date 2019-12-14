import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'

export const Nav = () => (
	<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
		<div className="navbar-brand">
			Мой сайт
		</div>

	<ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>Главная</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/cat">Котики</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">Информация</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/footballplayers">Футбол</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/fish">Рыбы</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/simpletask">Простые задачки</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/convertTemp">Конвертация температуры</NavLink>
      </li>
    </ul>
		
	</nav>
	)
