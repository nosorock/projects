import React from 'react'

export default props => {

const firstUrl = `https://jsonplaceholder.typicode.com/posts`
const secondUrl = `https://jsonplaceholder.typicode.com/posts`
const photosUrl = `https://jsonplaceholder.typicode.com/photos`
	return (
			<div style={{display: 'flex', justifyContent: 'center', padding: '25px'}}>
				<button onClick={() => props.onSelect(firstUrl)} className="btn btn-success">Первый пакет</button>
				<button onClick={() => props.onSelect(secondUrl)} className="btn btn-danger">Второй пакет</button>
				<button onClick={() => props.onSelectPhotos(photosUrl)} className="btn btn-primary">Фото</button>
			</div>
		)
}