import React, { Component } from 'react';
import './App.css';
import Article from './components/Article/Article';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import warningWrapper from './hocs/warningWrapper';
import errorHandlingWrapper from './hocs/errorHandlingWrapper';
import BindingForm from './components/BindingForm/BindingForm';

const ArticleWithWarning = warningWrapper(errorHandlingWrapper(Article));
const NavigationWithWarning = warningWrapper(errorHandlingWrapper(Navigation));
const RegisterWithWarning = warningWrapper(errorHandlingWrapper(Register));

class App extends Component {
  onSubmit(e,data) {
    e.preventDefault()
    console.log(data)
  }
  render() {
    return (
      <section className="App">
        <BindingForm onSubmit={this.onSubmit}>
          <h1>Test</h1>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
        </BindingForm>
        <ArticleWithWarning />
        <RegisterWithWarning />
        <NavigationWithWarning />
      </section>
    );
  }
}

export default App;
