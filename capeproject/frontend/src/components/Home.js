import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Assignment Requirement</h2>
<h4>API and UI can be created in Python-Django and React-Redux mandatory. </h4>
<ol>
<li>Create API to do CRUD Operation for Author and Books with Book Price, create 
    date, published date details.</li>
<li>Books can be added based on the Author. Many to Many relationships
    should be done. </li>
<li>UI has to develop CRUD Operation, Listing with pagination for Author and Books.</li>
<li>Authors listing screens can have a number of Books for an Author. When we click it can navigate to the Books listing. It should populate the Books belonging to the Author.
    <ul>
        <li>Able to sort the Books based on name, price</li>
        <li>Search needed for book name and created date</li>
        <li>if I select some range of price I should be able to see which books are in 
        the range</li>
        </ul>
        </li>
<li>Junit can be written write for 5 positives and 5 negative scenarios on the API 
    side as well as the UI side.</li>
<li>Menus should be available on the left side for all the pages to navigate to 
    the corresponding listing page.</li>
    </ol>
      </div>
    );
  }
}
 
export default Home;