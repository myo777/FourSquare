import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import Search from './Search'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      latlong: "",
      venues: []
    }
  }
  componentDidMount(){
     this.getLocation();
  }
  getLocation = () =>{
        navigator.geolocation.getCurrentPosition(response => {
          this.setState({
          latlong: response.coords.latitude + "," + response.coords.longitude
        },()=>{
          this.getVenues("tech")
        });
      });
  };

  getVenues =(query)=>{
       const endPoint = "https://api.foursquare.com/v2/venues/explore?";
       const params = {
         client_id: "N3RQIBE4YH254NYN4YOLLXUXV1TRBCNI5UN1ZXP10XVTAWNJ",
         client_secret: "OL03D1NMXAC0Z1NFSLNDUQPE4ONZC4EGNH4WRFCN4CERFIM5",
        
         ll : this.state.latlong,
         query: query,
         v:"511813950"
       };
       axios.get(endPoint+ new URLSearchParams(params)).then(response=>{
         this.setState({venues:response.data.response.groups[0].items})
       });
  }
  render() {
    return (
      <div>
        <Search getVenues={this.getVenues} />
        <ul>
        {this.state.venues.map(venue=>{
          return <li key={venue.venue.name}> {venue.venue.name}
          </li>
        })}
        </ul>
      </div>
    );
  }
}

export default App;
//Location:{venue.venue.location.address}
//getVenues={this.getVenues}