import { Component } from "react";
import Body from '../Body';
import Footer from '../Footer'
import MiddleComponent from '../MiddleComponent';
import './index.css'

class LandingPage extends Component{
    render(){
        return(
            <div>
                <Body />
                <MiddleComponent />
                <Footer />
            </div>
        )
    }
}

export default LandingPage