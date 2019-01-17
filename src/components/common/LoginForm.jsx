import React, { Component } from "react";
import Input from './Input';

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };

  handleSubmit = e => {
    e.preventDefault(); // full page reload

    console.log('submitted');
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <form className="container" onSubmit={this.handleSubmit} >
          <Input name="username" value={account.username} onChange={this.handleChange} label="Username" />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
            </small >
          <Input name="password" value={account.password} onChange={this.handleChange} label="Password" />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
