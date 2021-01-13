import { Component } from 'react';
import './App.css';
import Home from "./components/home/home";
import data from "./data.json";


class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Home/>
      </div>
    )
  }
}

export default App;
