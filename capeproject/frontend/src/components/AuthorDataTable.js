import React, { Component } from 'react'
import { NavLink,Route } from "react-router-dom";
import { Table, Button } from 'reactstrap';
import ModalForm from './ModalForm'
import AuthorModalDisplay from './AuthorModalDisplay';

class AuthorDataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          loaded: false,
          placeholder: "Loading",
        };
        this.compareBy.bind(this);
        this.sortBy.bind(this);
      }

      componentDidMount() {
        fetch("api/authors")
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
      fetch('api/authors/'+id, {
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
          <td>{item.id}</td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td><AuthorModalDisplay buttonLabel="Show Books" item={item} updateState={this.props.updateState}/></td>
          <td>
            <div>
              <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <React.Fragment>
      <Table responsive hover>
        <thead>
          <tr>
            <th><div onClick={() => this.sortBy('id')} >Author ID</div></th>
            <th><div onClick={() => this.sortBy('first_name')} >First Name</div></th>
            <th><div onClick={() => this.sortBy('last_name')} >Last Name</div></th>
            <th>Authors Books</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    </React.Fragment>
    )
  }
}

export default AuthorDataTable