import React, { Component } from 'react'

export default class Booksitem extends Component {
  render() {
    let {title, count,author} = this.props;
    return (
        <div className="card ">
                <div className="card-body">
                    <h5 className="card-title">Book Title: <small>{title}</small></h5>
                    <h5 className="card-title">Author: <small>{author}</small></h5>
                    <p className="card-text">Edition Count: <small>{count}</small></p>
                    <a href="#" className="btn btn-success mt-5">Add To Bookshelf</a>
                </div>
            </div> 
    )
  }
}
