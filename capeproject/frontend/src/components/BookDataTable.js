import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import BookModalForm from './BookModalForm'

class BookDataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          loaded: false,
          placeholder: "Loading"
        };
        this.compareBy.bind(this);
        this.sortBy.bind(this);
      }
    
      componentDidMount() {
        fetch("api/books")
          .then(response => {
            if (response.status > 400) {
              return this.setState(() => {
                return { placeholder: "Something went wrong!" };
              });
            }
            return response.json();
          })
          .then(data => {
            this.setState(() => {
              return {
                data,
                loaded: true
              };
            });
          });
      }
  deleteItem = id => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch('api/books/'+id, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
      .then(response => response.json())
      .then(item => {
        this.props.deleteItemFromState(id)
      })
      .catch(err => console.log(err))
    }

  }
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }
  render() {

    const items = this.state.data.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td><button>Author(s) List</button></td>
          <td>{item.published_on.substr(0, 10)}</td>
          <td>{item.created_on.substr(0, 10)}</td>
          <td>
            <div style={{width:"200px"}}>
              <BookModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th><div onClick={() => this.sortBy('name')} >Name</div></th>
            <th><div onClick={() => this.sortBy('price')} >Price</div></th>
            <th>Author(s)</th>
            <th><div onClick={() => this.sortBy('published_on')} >Published on</div></th>
            <th><div onClick={() => this.sortBy('created_on')} >Created on</div></th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default BookDataTable