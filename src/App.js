import { Route,Routes } from 'react-router-dom';
import { Component } from 'react';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import Register from './Components/Register'
import './App.css';


class App extends Component {
  render(){
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/register" Component={Register} />
        </Routes>
      </>
    )
  }
}

export default App;
