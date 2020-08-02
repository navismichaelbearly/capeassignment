import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'

class BookModal extends Component {
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
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>

      return (
      <div>
       
        <Modal id="myModal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Books List</ModalHeader>
          <ModalBody>
            <ul>
                <li>Book 1</li>
                <li>Book 2</li>
            </ul>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default BookModal