import React from 'react'
import {StarRating} from './StarRating'
import AddColor from './AddColor'
import '../App.css'
import {v4} from 'uuid'
import {Link} from 'react-router-dom'


const colors = {
  colors: [
    {
    "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
    "title": "ocean at dusk",
    "color": "#00c4e2",
    "rating": 5
    },
  {
  "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
  "title": "lawn",
  "color": "#26ac56",
  "rating": 3
  },
    {
    "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
    "title": "bright red",
    "color": "#ff0000",
    "rating": 0
    }
  ]
}

export default class ColorList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: colors.colors
    }
    this.addColor = this.addColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

addColor(title, color) {
  const colors = [...this.state.colors,
                  {id: v4(), title, color, rating: 0}
    ]
    this.setState({colors})
}

rateColor(id, rating) {
  const colors = this.state.colors.map(color => 
    (color.id !== id) ?
      color:
      {...color, rating }
    )
  this.setState({colors})
}

removeColor(id) {
    const colors = this.state.colors.filter(color => color.id !=id)
  this.setState({colors})
}
	render() {
		const {addColor, rateColor, removeColor} = this
    	const {colors} = this.state
		return (
			<div>
				<AddColor onNewColor={addColor} />
	            <ColorLists colors={colors} onRate={rateColor} onRemove={removeColor} />
	            <Link className="link" to="/">На главную</Link>
			</div>
			)
	}
} 
		
	


const Color = ({title, color, rating=0, onRate=f => f, onRemove=f => f}) => (
	<section className="colorblock">
		<h1>{title}</h1>
		<buton className="delete-color" onClick={onRemove}>X</buton>
		<div className="color" style={{backgroundColor: color}} />
		<div>
			<StarRating starsSelected={rating} onRate={onRate}/>
		</div>
	</section>
	)
	

export const ColorLists = ({colors=[], onRate=f => f, onRemove=f => f}) => (
		<div className="color-list">
		{
			(colors.length === 0) ? <p>Цвета отсутствуют</p> : 
			colors.map(color =>
				<Color key={color.id}
					{...color}
					onRate={(rating) => onRate(color.id, rating)}
					onRemove={() => onRemove(color.id)}
					/>
			)
		}
	</div>
)
