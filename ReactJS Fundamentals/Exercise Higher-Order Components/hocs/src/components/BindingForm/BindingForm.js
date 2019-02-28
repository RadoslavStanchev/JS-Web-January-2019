import React, { Component } from 'react';


class BindingForm extends Component {
    handleChange(e) {
        console.log(`${e.target.name} => ${e.target.value}`)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  render() {
    return (
      <div>
        <h1>Binding form!</h1>
        <form onSubmit={(e) => this.props.onSubmit(e, this.state)}>
            {React.Children.map(this.props.children, child => {
                if(child.type === 'input') {
                    return <span onChange={this.handleChange.bind(this)}>{child}</span>
                }
                return child;
            })}
            <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default BindingForm;
