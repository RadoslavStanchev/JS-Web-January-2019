import React from 'react';
import './register.css';

class RegisterForm extends React.Component {
    constructor(props) { //3
        super(props);
        this.state = {
            username: null,
            password: null,
            email: null
        }
        this.handleChange = this.handleChange.bind(this); //5 so we can access handleChange in the inputs below and we can add set state in handleChange
    }
    handleChange(event) { //4
        this.setState({ //7
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div className="Register">
                <h1>Sign Up</h1>
                <form onSubmit={(event) => {
                    // TODO: prevent the default behavior of the event and use the registerUser function by passing it the data from the form
                    event.preventDefault() //2
                    this.props.registerUser(this.state)

                }}>
                    {/* add name attributes to access them in handleChange and add onChange event //6 */}
                    <label>Username</label>
                    <input type="text" onChange={this.handleChange} name="username" id="usernameReg"/> 
                    <label>Email</label>
                    <input type="text" onChange={this.handleChange} name="email" id="emailReg"/>
                    <label>Password</label>
                    <input type="password" onChange={this.handleChange} name="password" id="passwordReg"/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}
export default RegisterForm;