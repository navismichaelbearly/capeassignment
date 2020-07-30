import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import BookModalForm from './BookModalForm'

class AuthorBookDataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          loaded: false,
          placeholder: "Loading"
        };
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


  render() {

    const items = this.state.data.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.published_on}</td>
          <td>{item.created_on}</td>
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Published on</th>
            <th>Created on</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default AuthorBookDataTable