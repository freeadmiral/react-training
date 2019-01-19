import React, { Component } from "react";
import Input from './Input';
import Joi from 'joi-browser';

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors:{}
  };

  schema ={
    username : Joi.string().required().label('Username'),
    password : Joi.string().required().label('Password')
  };

  validate=()=>{
    const options = {abortEarly:false};
    const result = Joi.validate(this.state.account,this.schema,options);
    console.log(result);  
    if(!result.error) return null;

    const errors = {};
    for(let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({name,value}) => {
   const obj={[name]:value};
   const schema={ [name]:this.schema[name] };
   const {error}= Joi.validate(obj,schema);
   return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account,errors });    
  };


  handleSubmit = e => {
    e.preventDefault(); // full page reload
    const errors = this.validate();
    this.setState({errors:errors || {}});
    if(errors) return;
    console.log('submitted');
  };

  
  render() {
    const { account,errors } = this.state;
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <form className="container" onSubmit={this.handleSubmit} >
          <Input placeholder="Enter username" name="username" value={account.username} onChange={this.handleChange} errors={errors.username} label="Username" />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
            </small >
          <Input placeholder="Enter password" name="password" value={account.password} onChange={this.handleChange} errors={errors.password} label="Password" />
          <button disabled={this.validate()} type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
