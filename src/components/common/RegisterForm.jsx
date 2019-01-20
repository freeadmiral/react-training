import React from "react";
import Joi from "joi-browser";
import Form from "./Form";

class RegisterForm extends Form {
  state = { data: { username: "", password: "", AA: "" }, errors: {} };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    AA: Joi.string()
      .required()
      .label("Name")
  };

  goSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <form className="container" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("AA", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
