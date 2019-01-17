import React, { Component } from "react";

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
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={account.username}
              onChange={this.handleChange}
              autoFocus
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={account.password}
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
