import React, { Component } from 'react'
import Booksitem from './Booksitem'

export default class Books extends Component {

    constructor() {
        super();
        // console.log("Hello i am a constructor from news components");
        this.state = {
            docs: []
        }
    }

    async componentDidMount() {
        let url = `https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({docs: parsedData.docs})
    }

    render() {
        return (
            <div className='container my-3'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search By Book Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-success" type="button" id="button-addon2">Search</button>
                </div>
                <div className="row">
                    {this.state.docs.map((element) => {
                        return <div className="col-md-4 my-sm-3 my-1" key={element.edition_key}>
                            <Booksitem title={element.title} count={element.edition_count} author={element.author_name} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
