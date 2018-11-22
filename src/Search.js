import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props)

        this.state={
            searchInput: ""
        };
    }

    changeHandler=(event)=>{
        this.setState({ searchInput: event.target.value });
    }

    
    render() { 
        return ( 
            <div>
                
                    <input onChange={this.changeHandler} type="text" placeholder="search venue" name="searchInput" id="searchInput" />
                    <button onClick={this.props.getVenues.bind( null, this.state.searchInput)}>Search</button>
                
            </div>
         );
    }
}
 
//onSubmit={this.props.getVenues.bind( null,this.state.searchInput)}
//type="submit"