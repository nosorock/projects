import React from 'react'

export default props => (
  <table className="table">
  <thead>
    <tr>
      <th onClick={props.onSort.bind(null, 'albumId')}>
       albumId {props.sortField === 'albumId' ? <small>{props.sort}</small> : null} 
      </th>
      <th onClick={props.onSort.bind(null, 'id')}>
      id {props.sortField === 'id' ? <small>{props.sort}</small> : null}
      </th>
      <th onClick={props.onSort.bind(null, 'title')}>
      title {props.sortField === 'title' ? <small>{props.sort}</small> : null}
      </th>
      <th onClick={props.onSort.bind(null, 'url')}>
      url {props.sortField === 'url' ? <small>{props.sort}</small> : null}
      </th>
      <th onClick={props.onSort.bind(null, 'thumbnailUrl')}>
      thumbnailUrl {props.sortField === 'thumbnailUrl' ? <small>{props.sort}</small> : null}
      </th>
    </tr>
  </thead>
  <tbody>
    {props.data.map(item => (
        <tr key={item.id} onClick={props.onRowSelect.bind(null, item)}>
          <td>{item.albumId}</td>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td><a href="{item.url}">{item.url}</a></td>
          <td><a href="{item.thumbnailUrl}">{item.thumbnailUrl}</a></td>
        </tr>
      ))}
  </tbody>
</table>
)

