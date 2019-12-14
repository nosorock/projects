import axios from 'axios'

export default axios.create({
	baseURL: 'https://react-quiz-46283.firebaseio.com/'
})