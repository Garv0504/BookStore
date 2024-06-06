import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Books from './components/Books'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Books/>
      </div>  
    )
  }
}
