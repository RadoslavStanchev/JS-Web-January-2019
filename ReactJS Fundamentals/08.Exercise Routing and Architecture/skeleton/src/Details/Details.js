import React, { Component } from 'react';


class Details extends Component {
  render() {
    return (
      <div className="Home">
        { /* TODO */}
        <h1>{this.props.match.params.id}</h1>
        <h1>{this.props.movie ? this.props.movie.title: 'Testing'}</h1>
      </div >
    );
  }
}


export default Details;
