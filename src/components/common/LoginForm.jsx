import React from "react";
import Joi from "joi-browser";
import Form from "./Form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  goSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <form className="container" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
