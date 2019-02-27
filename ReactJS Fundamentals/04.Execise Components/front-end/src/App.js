import React, { Component } from 'react';
import './App.css';
import Street from './Street/Street.js'
import House from './House/House.js'
import HouseDetails from './HouseDetails/HouseDetails.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streets: [],
      selectedStreetIdx: 0,
      selectedHouseIdx: 0,
      hasFetched: false
    }
  }
  componentWillMount() {
    fetch('http://localhost:9999/feed/street/all')
      .then(rawData => rawData.json())
      .then(data => this.setState({
        streets: data.streets,
        hasFetched: true
      }))

  }
  // getStreets() {
  //   return this.state.streets;
  // }

  getSelectedStreet() {
    if(this.state.hasFetched) {
      return this.state.streets[this.state.selectedStreetIdx].homes;
    }
    return[]
  }

  getSelectedHouse() {
    return this.state.streets[this.state.selectedStreetIdx].homes[this.state.selectedHouseIdx]
  }

  hoverCurrentStreet(idx) {
    this.setState({
      selectedStreetIdx: idx
    })
  }

  hoverCurrentHouse(idx) {
    this.setState({
      selectedHouseIdx: idx
    })
  }
  render() {
    return (
      <div className="App">
        <div className="streets">
          <h2>Streets</h2>
          {this.state.streets.length > 0 ? this.state.streets.map((street, idx) => {
            return (<Street location={street.location} key={idx} id={idx} hoverCurrentStreet={this.hoverCurrentStreet.bind(this)}/>)
          }) : null}
          {/* { 
            this.getStreets().map((street, idx) => (
              <Street location={street.location} key={idx} /> 
            ))
            
          } */}
        </div>
        <div className="houses">
        <h2>Houses</h2>
          { this.getSelectedStreet().map((home, idx) => {
            return (<House selectHouse={(e) => this.hoverCurrentHouse(idx, e)} type={home.type} description={home.description} imageUrl={home.imageUrl} price={home.price} key={idx} id={idx} hoverCurrentHouse={this.hoverCurrentHouse.bind(this)}/>)
          })}
          {/* {
            this.getSelectedStreet().map((house, idx) => (
              <House imageUrl={house.imageUrl} key={idx} />
            ))
          } */}
          
        </div>
         {/* {this.state.streets.length > 0 ? <HouseDetails type={this.getSelectedHouse().type} description=
         {this.getSelectedHouse().description} imageUrl={this.getSelectedHouse().imageUrl} price=
         {this.getSelectedHouse().price} key={this.state.selectedHouseIdx} />:null} */}
         {this.state.hasFetched ? (<HouseDetails house={this.getSelectedStreet()[this.state.selectedHouseIdx]}/>) : ''}
      </div>  
    );
  }
}

export default App;
