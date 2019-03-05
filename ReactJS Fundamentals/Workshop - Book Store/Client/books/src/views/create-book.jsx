import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CreateBook extends Component {
    render() {
        return (
            
        <div className="form-wrapper">
          <h1>Create New Book</h1>
          <form>
            <div className="form-group"><label htmlFor="title">Title</label><input type="text" name="title" id="title"
                placeholder="Enter book title" value="" /></div>
            <div className="form-group"><label htmlFor="genres">Genres</label><input type="text" name="genres" id="genres"
                placeholder="Enter genres for the book. Put a comma between them" value="" /></div>
            <div className="form-group"><label htmlFor="description">Description</label><input type="text" name="description"
                id="description" placeholder="Enter book description" value="" /></div>
            <div className="form-group"><label htmlFor="image">Image URL</label><input type="text" name="image" id="image"
                placeholder="Enter book image URL" value="" /></div>
            <div className="form-group"><label htmlFor="author">Author</label><input type="text" name="author" id="author"
                placeholder="Enter book author" value="" /></div>
            <div className="form-group"><label htmlFor="price">Price</label><input type="number" name="price" id="price"
                placeholder="Enter book price" value="" /></div><input type="submit" value="Create" />
          </form>
        </div>
      
        )
    }
}

export default CreateBook;