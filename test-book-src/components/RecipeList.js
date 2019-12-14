import React from 'react'
import PropTypes from 'prop-types'

export default class RecipeList extends React.Component {

	render() {
		const {ingredients, steps, title} = this.props
		return(
			<div style={{border: '1px solid black', padding:'10px', 
					display: 'inline-block', borderRadius:'15px'}}>
				<h2>{title}</h2>
				<p>
					<span>{ingredients} Ingredients </span>
					<span>{steps} Steps</span>
				</p>
			</div>
			)
	}
}

RecipeList.propTypes = {
	ingredients: PropTypes.number,
	step: PropTypes.number,
	title: (props, propName) => (
		typeof props[propName] !== 'string' ?
		 	new Error('title должен быть string') :
		(props[propName].length >=20) ?
			new Error('title не более 20 символов') : null
		)
}

RecipeList.defaultProps = {
	ingredients: 0,
	steps: 0,
	title: ''
}