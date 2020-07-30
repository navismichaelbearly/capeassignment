import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AuthorAddEdit extends React.Component {
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
    fetch('api/authors/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('api/authors/'+this.state.id+'/', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
      })
    })
      .then(response => response.json())
      .then(response => response.json())
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, first_name, last_name} = this.props.item
      this.setState({ id, first_name, last_name })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="first">First Name</Label>
          <Input type="text" name="first_name" id="first_name" onChange={this.onChange} value={this.state.first_name === null ? '' : this.state.first_name} />
        </FormGroup>
        <FormGroup>
          <Label for="last">Last Name</Label>
          <Input type="text" name="last_name" id="last_name" onChange={this.onChange} value={this.state.last_name === null ? '' : this.state.last_name}  />
        </FormGroup>
        
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AuthorAddEdit