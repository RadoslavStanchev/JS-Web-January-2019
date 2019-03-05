import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserConsumer } from '../components/contexts/user-context'

const Header = ({ isLoggedIn, username }) => {
    return (
        <header>
            <nav className="navbar-menu">
                <NavLink to="/" activeClassName="active">Book Store Logo</NavLink>
                <NavLink to="/" activeClassName="active" aria-current="page">Home</NavLink>
                <NavLink to="/store" activeClassName="active">Store</NavLink>
                <NavLink to="/orders" activeClassName="active">My Orders</NavLink>
                <NavLink to="/cart" activeClassName="active">Cart</NavLink>
                {
                    isLoggedIn
                     ? <NavLink to="/logout">Logout</NavLink>
                     : <NavLink to="/login">Log In</NavLink>
                    
                }

                {
                    isLoggedIn
                    ? <span>Hello, {username} </span>
                    : null
                }
                
            </nav>
        </header>
    )
}

const HeaderWithContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn, username }) => (
                    <Header 
                        {...props} 
                        isLoggedIn={isLoggedIn}
                        username={username} 
                    />
                )
            }
        </UserConsumer>
    )
}

export default HeaderWithContext