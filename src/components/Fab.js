import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export default class Fab extends Component {
  render() {

    return ( 
    
    <div className="open-search">
      <Link to={"/search"}>Add a Book</Link>
    </div>
    );
  }
}



//<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>