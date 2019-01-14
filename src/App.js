import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import Navbar from "./components/common/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
