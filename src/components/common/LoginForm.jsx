import React  from "react";
import Input from './Input';
import Joi from 'joi-browser';
import Form from './Form';

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors:{}
  };

  schema ={
    username : Joi.string().required().label('Username'),
    password : Joi.string().required().label('Password')
  };

  goSubmit = () =>{
    console.log('submitted');
  };

  
  render() {
    const { data,errors } = this.state;
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <form className="container" onSubmit={this.handleSubmit} >
          <Input placeholder="Enter username" name="username" value={data.username} onChange={this.handleChange} errors={errors.username} label="Username" />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
            </small >
          <Input placeholder="Enter password" name="password" value={data.password} onChange={this.handleChange} errors={errors.password} label="Password" />
          <button disabled={this.validate()} type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
