import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar nacbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            MERN stack CRUD app
          </a>
          <div className="navbar-nav mr-auto">
            <li className="li-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
