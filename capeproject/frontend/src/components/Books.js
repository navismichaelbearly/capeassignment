import React from 'react'
import BookDataTable from './BookDataTable'
import BookModalForm from './BookModalForm'
class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          loaded: false,
          placeholder: "Loading"
        };
      }
    
     
   render() {
    return <React.Fragment>
      <h3>Books</h3>
      <BookModalForm  buttonLabel="Add" updateState={this.props.updateState}/>
         <br/><br/>
    <BookDataTable/>
</React.Fragment>
   }
}
export default Books;