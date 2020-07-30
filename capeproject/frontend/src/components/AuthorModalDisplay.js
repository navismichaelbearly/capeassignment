import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AuthorAddEdit from './AuthorAddEdit'

class AuthorModalDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    
    const listItems = this.props.item.books.map((eachItem) =>
            <li key={eachItem.toString()}>
              {eachItem.name}
            </li>
          );
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>

      const label = this.props.buttonLabel

      let button = ''
      let title = ''

     
        button = <Button
                  color="warning"
                  onClick={this.toggle}
                  style={{float: "left", marginRight:"10px"}}>{label}
                </Button>
        title = 'Show Books'

      return (
       
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>          
          <ModalBody>
          {listItems}
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default AuthorModalDisplay