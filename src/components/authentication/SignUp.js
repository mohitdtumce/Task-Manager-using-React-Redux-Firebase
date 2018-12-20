import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        firstName:"",
        lastName:"",
        email: "",
        password: ""
    };

    handleSubmit = (input) => {
        input.preventDefault();
        console.log(this.state);
    };

    handleChange = (input) => {
        this.setState({
            [input.target.id]: input.target.value
        });
    };

    render() {
        return (
            <div className="container s12 m6 center">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn green lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
