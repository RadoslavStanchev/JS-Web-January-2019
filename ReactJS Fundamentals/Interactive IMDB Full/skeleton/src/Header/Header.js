import React from 'react';
import { NavLink, Link, Switch } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <Link to="/" className="logo">Interactive IMDB</Link>
            <div className="header-right">
                <Link to="/">Home</Link>
                <span>
                <Switch>                    
                    {
                        props.user.isLoggedIn ?
                        <React.Fragment>
                            <Link to="#">Welcome {props.user.username}!</Link>
                            {props.user.isAdmin ? <NavLink to="/movie/create">Create</NavLink> : null}
                            <NavLink to="#" onClick={props.logout}>Logout</NavLink>                                
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </React.Fragment>                        
                    }
                </Switch>                    
                </span>
            </div>
        </header>
    );
}

export default Header;