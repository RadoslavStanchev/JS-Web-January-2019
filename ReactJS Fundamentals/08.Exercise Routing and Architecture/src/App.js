import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAdmin: false,
      movies: []
    }
  }

  loginUser(user) {
    fetch('http://localhost:9999/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({
          user: data.username
        })
        sessionStorage.setItem('isAdmin', data.isAdmin);
        sessionStorage.setItem('userId', data.userId);
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('token', data.token);
      })
  }

  registerUser(user) {
    fetch('http://localhost:9999/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then((data) => {
        this.loginUser({username: user.username, password: user.password})
      })
  }

  logout() {
    this.setState({
      user: null,
      isAdmin: false
    })
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('isAdmin');
  }

  createMovie(movie) {
    fetch('http://localhost:9999/feed/movie/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  componentWillMount() {
    if (sessionStorage.getItem('username')) {
      this.setState({
        user: sessionStorage.getItem('username'),
        isAdmin: sessionStorage.getItem('isAdmin')
      })
    }

    fetch('http://localhost:9999/feed/movies')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          movies: data.movies
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header>
          <a href="#default" class="logo">Interactive IMDB</a>
          <div class="header-right">
            <a class="active" href="/">Home</a>
            {this.state.user ? 
              <span>
              <a href="#">Welcome {this.state.user}!</a>
              {this.state.isAdmin === 'true' ? 
                <span>
                <a href="/create">Create</a>
                </span>
                :
                null}
                <a onClick={this.logout.bind(this)} href="#">Logout</a>
              </span>
              :
              <span>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
              </span> }
          </div>
        </header>
        <Route exact path="/" component={() => <Home movies={this.state.movies} user={this.state.user}/>}/>
        <Route path="/create" component={() => <Create createMovie={this.createMovie.bind(this)}/>}/>
        <Route path="/register" component={() => <Register registerUser={this.registerUser.bind(this)}/>}/>
        <Route path="/login" component={() => <Login loginUser={this.loginUser.bind(this)}/>}/>
      </div>
    );
  }
}

export default App;
