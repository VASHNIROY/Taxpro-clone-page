//import Navbar from './Components/Navbar';
import './App.css';
import { Component } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer'
import MiddleComponent from './Components/MiddleComponent';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <HomePage />
        <MiddleComponent />
        <Footer />
      </div>
    )
  }
}

export default App;
