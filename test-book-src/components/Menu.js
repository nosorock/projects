import React from 'react'
import {Link} from 'react-router-dom'
import {data, Recipe} from './Recipe'
import '../App.css'


export const Menu = () => (
	<div>
		<MenuRecipes title="Рецепты" recipes = {data}/>
		<Link  className="link" to="/">На главную</Link>
	</div>
)

export const MenuRecipes = ({title, recipes}) => (
	<div>
		<h1>{title}</h1>
		{
			recipes.map((recipe, i) => (	
			<Recipe key={i} {...recipe} />
			))}
	</div>
	)