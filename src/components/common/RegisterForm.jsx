import React from "react";
import Joi from "joi-browser";
import Form from "./Form";
import * as userServices from "../../services/userService";

class RegisterForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  goSubmit = async () => {
    try {
      const response = await userServices.registerUser(this.state.data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <form className="container" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
