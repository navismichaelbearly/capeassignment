import React from 'react'
import SingleAuthorDataTable from './SingleAuthorDataTable'
class SingleAuthor extends React.Component {
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
         <br/><br/>
       <SingleAuthorDataTable/>
 </React.Fragment>
   }
}
export default SingleAuthor;