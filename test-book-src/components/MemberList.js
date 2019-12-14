import React from 'react'

const getFakeMembers = count => new Promise((resolves, rejects) => {
	const api = `https://api.randomuser.me/?nat=US&results=${count}`
	const request = new XMLHttpRequest()
	request.open('GET', api)
	request.onload = () => (request.status ===200) ?
		resolves(JSON.parse(request.response).results) :
		rejects(Error(request.statusText))
	request.onerror = err => rejects(err)
	request.send()
})

const Member = ({email, picture, name, location, gender, phone}) => (
	<div>
		<img src={picture.thumbnail}/>
		<h1>{name.first} {name.last}</h1>
		<p>Пол: {gender}</p>
		<p><a href={"mailto:" + email}>{email}</a></p>
		<p>{location.city} {location.state}</p>
		<p>Телефон: {phone}</p>
	</div>
	)

export default class MemberList extends React.Component {
	constructor() {
		super()
		this.state = {
			members: [],
			loading: false,
			error: null
		}
	}

	componentWillMount() {
		this.setState({loading: true})
		getFakeMembers(this.props.count).then (
			members => {
				this.setState({members, loading: false})
			},
			error => {
				this.setState({error, loading: false})
			}
		)
	}

	componentWillUpdate() {
		console.log('Жизненный цикл изменен')
	}

	render() {
		const {members, loading, error} = this.state
		return (
			<div>
				{(loading) ?
					<span>Загрузка сотрудников</span> :
					(members.length) ?
						members.map((user, i) => 
							<Member key={i} {...user} />
							) :
						<span>Загружено 0 сотрудников</span>
				}
				{(error) ? <p>Ошибка загрузки</p> : ''}
			</div>
			)
	}
}
