import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export default class Add extends Component {
  render() {

    return ( 
            <div>
              <Link
              className="open-search" 
              to={"/search"}
              >Add a book
              </Link>
            </div>
            );
          }
        }



