import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTrailer: false,
      showStoryLine: false,
      currentMovie: {}
    }
  }
  
  displayTrailer(movie) {
    this.setState({
      currentMovie: movie,
      showTrailer: true,
      showStoryLine: false
    })
  }

  displayStoryLine(movie) {
    this.setState({
      currentMovie: movie,
      showTrailer: false,
      showStoryLine: true
    })
  }

  render() {
    return (
      <div className="Home">
         <h1>All movies</h1>
         {this.state.showTrailer ? 
          <span>
            <h2>Trailer of {this.state.currentMovie.title}</h2>
            <ReactPlayer className="trailer" url={this.state.currentMovie.trailerUrl} playing/>
          </span>
          :
          null}
          {this.state.showStoryLine ? 
          <span>
            <h2>Story line of {this.state.currentMovie.title}</h2>
            <p>{this.state.currentMovie.storyLine}</p>
          </span>
          :
          null}
          <div className="movies">
            {this.props.movies.map(movie => {
                return (
                <div className="movie">
                  <h2>{movie.title}</h2>
                  <img src={movie.poster}></img>
                  {this.props.user ? 
                    <span>
                      <button onClick={() => this.displayTrailer(movie)}>View Trailer</button>
                      <button onClick={() => this.displayStoryLine(movie)}>View Story Line</button>
                    </span>
                    :
                    null}
                </div>)
            })}
          </div>
      </div>
    );
  }
}

export default Home;
