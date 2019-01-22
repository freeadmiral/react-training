import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import Navbar from "./components/common/Navbar";
import MovieForm from "./components/MovieForm";
import LoginForm from "./components/common/LoginForm";
import RegisterForm from "./components/common/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";

class App extends Component {
  state = {};

  componentDidMount = () => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    this.setState({ user });
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar user={this.state.user} />
        <div className="content">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
