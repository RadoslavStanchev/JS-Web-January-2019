import React, { Component } from 'react';
import '../Street/Street.css';

class Street extends Component {
    render() {
        return (
            <div className = "street" onMouseEnter={() => this.props.hoverCurrentStreet(this.props.id)}>
                <p className="street-info"> {this.props.location} </p>
            </div>
        );
    }
}

export default Street;