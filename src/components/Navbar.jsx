import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid mx-sm-5 mx-0">
                        <a className="navbar-brand text-light" href="#">Navbar</a>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" aria-current="page" href="/about">About</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">    
                                <button className="btn btn-success" type="submit">My Bookshelf</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
