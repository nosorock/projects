import React from 'react'
import '../App.css'
import PropTypes from 'prop-types'

const Star = ({selected=false, onClick = f => f}) => (
	<div style={{marginTop: '10px'}} className={(selected) ? "star selected" : "star"} 
	onClick={onClick} />
	)

Star.propTypes = {
	selected: PropTypes.bool,
	onClick: PropTypes.func
}

export const StarRating = ({starsSelected =0, totalStars=5, onRate = f => f}) => (
		<div>
			{[...Array(totalStars)].map((n, i) =>
 			<Star key={i}
 				selected={i<starsSelected}
 				onClick={() => onRate(i+1)} 
 				/>
 			)}
 			<p>{starsSelected} of {totalStars} stars</p>
		</div>
	)


StarRating.propTypes = {
	totalStars: PropTypes.number
}

StarRating.defaultProps = {
	totalStars: 5
}