import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export const About = () => (
	<div>
  		<h1>Обо мне</h1>
  		<p>Спасибо что заглянули в информацию обо мне</p>
  		<p>Тут что-то написано обо мне</p>
        <Link className={'link'} to="/">На главную</Link>
	</div>
	)