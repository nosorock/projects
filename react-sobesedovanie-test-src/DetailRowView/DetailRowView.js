import React from 'react'

export default ({text}) => (
	<div style={{border: '1px solid black', padding: '15px', display: 'inline-block'}}>
		<p>Выбран номер: {text.id}</p>
		<p>Его текст: {text.title}</p>
	</div>
	)