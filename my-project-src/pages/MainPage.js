import React from 'react'
import {themes, ThemeContext} from './context/ThemeContext'
import {ThemedButton} from './context/ThemedButton'

const Toolbar = props => (
	<ThemedButton onClick={props.changeTheme}>Поменять тему(Context)</ThemedButton>
)


export default class MainPage extends React.Component {
	state = {
		theme: themes.light
	}

toggleTheme() {
	this.setState({
		theme: this.state.theme === themes.dark ? themes.light : themes.dark,
	})
}


	render() {
		return (
				<div>
					<h1>Добро пожаловать на главную страницу</h1>
					
					<ThemeContext.Provider value={this.state.theme}>
						<Toolbar changeTheme={this.toggleTheme.bind(this)} />
					</ThemeContext.Provider>

				</div>
			)
	}
} 