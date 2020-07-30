import React from 'react'
import AuthorDataTable from './AuthorDataTable'
import ModalForm from './ModalForm'
class Authors extends React.Component {
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
         <h3>Authors</h3> 
         <ModalForm  buttonLabel="Add" updateState={this.props.updateState}/>
         <br/><br/>
       <AuthorDataTable/>
 </React.Fragment>
   }
}
export default Authors;