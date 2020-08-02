import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class BookAddEdit extends React.Component {
  state = {
    id: 0,
    first_name: '',
    last_name: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('api/books/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
        authors: [2,3],
        published_on: this.state.published_on,
        created_on: this.state.created_on
      })
    })
      .then(response => response.json())
      .then(item => {
        $('#myModal').modal('hide');
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('api/books/'+this.state.id+'/', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        price: this.state.price,
        authors: this.state.authors,
        published_on: this.state.published_on,
        created_on: this.state.created_on
      })
    })
      .then(response => response.json())
      .then(response => response.json())
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, name, price, authors, published_on, created_on} = this.props.item
      this.setState({ id, name, price, authors, published_on, created_on })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" onChange={this.onChange} value={this.state.name === null ? '' : this.state.name} />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="text" name="price" id="price" onChange={this.onChange} value={this.state.price === null ? '' : this.state.price}  />
        </FormGroup>
        <FormGroup>
          <Label for="authors">Author ID (seperated by commas)</Label>
          <Input type="text" name="authors" id="authors" onChange={this.onChange} value={this.state.authors === null ? '' : this.state.authors}  />
        </FormGroup>
        <FormGroup>
          <Label for="published_on">Published on</Label>
          <Input type="date" name="published_on" id="published_on" onChange={this.onChange} value={this.state.published_on === null ? '' : this.state.published_on}  />
        </FormGroup>
        <FormGroup>
          <Label for="created_on">Created on</Label>
          <Input type="date" name="created_on" id="created_on" onChange={this.onChange} value={this.state.created_on === null ? '' : this.state.created_on}  />
        </FormGroup>

        
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default BookAddEdit