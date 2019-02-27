import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Home from './Home/Home';
import Header from './Header/Header'
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import './App.css';
import Details from './Details/Details';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      isAdmin: false,
      movies: [],
      selectedMovieId: 0
    }
  }

  componentWillMount() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true'
    if (localStorage.getItem('username')) {
      this.setState({
        username: localStorage.getItem('username'),
        isAdmin: isAdmin
      })
    }
    fetch('http://localhost:9999/feed/movies')
      .then(rawData => rawData.json())
      .then(body => {
        this.setState({
          movies: body.movies
        })
        toast.success(body.message, {
          closeButton: false
        })
      })
  }


  handleChange(event) {
    // console.log(event.target.name, '=>', event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCreateSubmit(e, data) {
    e.preventDefault();
    fetch('http://localhost:9999/feed/movie/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }).then(rawData => rawData.json())
      .then(responseBody => {
        if (!responseBody.errors) {
          toast.success(responseBody.message, {
            closeButton: false
          })
        }
        else {
          toast.error(responseBody.message, {
            closeButton: false
          })
        }
      })
  }

  handleSubmit(event, data, isSignUp) {
    event.preventDefault();
    // console.log(data)
    fetch('http://localhost:9999/auth/sign' + (isSignUp ? 'up' : 'in'), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-Type": 'application/json' }
    }).then(rawData => rawData.json())
      .then(responseBody => {
        if (responseBody.username) {
          this.setState({
            username: responseBody.username,
            isAdmin: responseBody.isAdmin
          })
          localStorage.setItem('username', responseBody.username)
          localStorage.setItem('isAdmin', responseBody.isAdmin)
          toast.success(`Welcome,  ${responseBody.username}`, {
            closeButton: false
          })
        }
        else {
          toast.error(responseBody.message, {
            closeButton: false
          })
        }
      })
  }

  render() {
    return (
      <div className="App">
        <ToastContainer />
        { /* TODO */}
        <BrowserRouter>
          <div>
            <Header isAdmin={this.state.isAdmin} username={this.state.username} />
            <Switch>
              <Route exact render={(props) => <Details {...props} movie={this.props.movies[this.state.selectedMovieId]} />} path="/movies/:id"  />

              <Route exact render={(props) => <Home {...props} movies={this.state.movies} />} path="/" />

              <Route render={(props) => this.state.isAdmin ?
                <Create
                  {...props}
                  handleCreateSubmit={this.handleCreateSubmit.bind(this)}
                  handleChange={this.handleChange}
                /> :
                <Redirect
                  to={{
                    pathname: '/login'
                  }}
                />
              }
                path="/create" />

              <Route render={(props) => <Register {...props} handleSubmit={this.handleSubmit.bind(this)}
                handleChange={this.handleChange} />} path="/register" />

              <Route render={() => <Login handleSubmit={this.handleSubmit.bind(this)}
                handleChange={this.handleChange} />} path="/login" />

              <Route render={() => <h1>Not found!</h1>} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
