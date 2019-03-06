import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
  render() {
    return (
      <div className="Create">
         <h1>Create Movie</h1>
         <form onSubmit={() => {
           this.props.createMovie({
             title: document.getElementById('title').value,
             storyLine: document.getElementById('storyLine').value,
             trailerUrl: document.getElementById('trailerUrl').value,
             poster: document.getElementById('poster').value
           })
         }} action="/">
           <label>Title</label>
           <input type="text" id="title"/>
           <label>Story Line</label>
           <input type="text" id="storyLine"/>
           <label>Trailer Url</label>
           <input type="text" id="trailerUrl"/>
            <label>Movie Poster</label>
           <input type="text" id="poster"/>
           <input type="submit" value="Create"/>
         </form>
      </div>
    );
  }
}

export default Create;
