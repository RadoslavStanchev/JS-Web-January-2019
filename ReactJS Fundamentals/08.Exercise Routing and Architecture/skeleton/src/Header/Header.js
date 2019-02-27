import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header><NavLink exact to="/" className="logo">Interactive IMDB</NavLink>
                <div className="header-right">
                    <NavLink exact to="/">Home</NavLink>
                    {
                        this.props.username ?
                        (<span>
                            <a href="#">Welcome {this.props.username}!</a>
                            {
                                this.props.isAdmin ? 
                                (<NavLink to="/create">Create</NavLink>)
                                :
                                null
                            }
                            <a href="#">Logout</a>
                        </span>)
                        :
                        (<span>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                        </span>)
                    }
                </div>
            </header>
        );
    }
}

export default Header;
