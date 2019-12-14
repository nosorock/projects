import React from 'react';
import './App.css';
import Loader from './Loader/Loader'
import Table from './Table/Table'
import _ from 'lodash'
import DetailRowView from './DetailRowView/DetailRowView'
import ModeSelector from './ModeSelector/ModeSelector'
import ReactPaginate from 'react-paginate';
import TableSearch from './TableSearch/TableSearch'
import TablePhotos from './TablePhotos/TablePhotos'


class App extends React.Component {

  state = {
    isLoading: false,
    data: [],
    sort: 'asc',
    sortField: 'id',
    row: null,
    isModeSelected: false,
    currenPage: 0,
    search: '',
    isTablephotos: false
  }
  
  async fetchData(url) {
    const responce = await fetch(url)
    const data = await responce.json()
    
    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort)
    })

    console.log(data)
  }

onSort = sortField => {
  const  clonedData = this.state.data.concat()
  const sort = this.state.sort === 'asc' ? 'desc' : 'asc'

  const data = _.orderBy(clonedData, sortField, sort)
  
  this.setState({
    data, 
    sort,
    sortField 
  })
}

onRowSelect = row => {
  this.setState({ row })
}

modeSelectHandler = url => {
  this.setState({
    isModeSelected: true,
    isLoading: true
  })

  this.fetchData(url)
}

onSelectPhotos = url => {        
  this.setState({
    isTablephotos: true,
    isLoading: true,
    isModeSelected: true
  })

  this.fetchData(url)
}

pageChangeHandler = ({selected}) => {
  this.setState({
    currenPage: selected
  })
}

searchHandler = search => {
  this.setState({
    search,
    currenPage: 0
  })
}

getFilteredData() {
  const {data, search} = this.state

  if (!search) {
    return data
  }

  return data.filter(item => {
    return  item['title'].toLowerCase().includes(search.toLowerCase())
        
    
    
  })
}

  render() {

    const pageSize = 30

    if(!this.state.isModeSelected) {
      return (
          <div className="container">
            <ModeSelector 
            onSelect={this.modeSelectHandler}
            onSelectPhotos={this.onSelectPhotos} 
            />
          </div>
        )
    }

    const filteredData = this.getFilteredData()


    const pageCount = Math.ceil(filteredData.length / pageSize)

    const displayData = _.chunk(filteredData, pageSize)
    [this.state.currenPage]

    return (
      <div className="container">
        {
        this.state.isLoading ? 
        <Loader /> : 
        <React.Fragment>
          <TableSearch onSearch={this.searchHandler}/>
          
          {
            this.state.isTablephotos 
            ? <TablePhotos 
                data={displayData}
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect} 
              /> :
          <Table 
                data={displayData}
                onSort={this.onSort} 
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect} 
              /> 
        }
          
        </React.Fragment>
        
        }

        {
          this.state.data.length > pageSize ?
          <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.pageChangeHandler}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          forcePage={this.state.currenPage}
        /> : null
        }

        {
          this.state.row ?
          <DetailRowView text={this.state.row}/> :
          null
        }

      </div>
    );
  }
}

export default App;
