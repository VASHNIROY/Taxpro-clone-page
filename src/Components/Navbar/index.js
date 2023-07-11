import { Component } from "react";
import {Link} from 'react-router-dom'
import FeaturesHoverComponent from "../FeaturesHoverComponent";
import "./index.css"
import ContactusHoverComponent from "../ContactusHoverComponent";

class Navbar extends Component{
    render(){
        return(
            <nav className="dropdownmenu">
            <div className='nav-inner-container'>
                <Link to="/" className="reviews-list-link"><img alt="logo" className='logo' src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1688715826/1_rtmzkd.jpg" /></Link>
                <ul className='nav-un-ordered-list-container'>
                    <Link className="reviews-list-link" to="/jobs">
                        <li>FEATURES
                            <FeaturesHoverComponent />   
                        </li>
                    </Link>
                    <Link className="reviews-list-link" to="/reviews">
                        <li>ABOUT US 
                        </li>
                    </Link>
                    <Link className="reviews-list-link" to="/services">
                        <li>
                            CONTACT US
                            <ContactusHoverComponent />
                        </li>
                    </Link>
                </ul>
                <div className="sign-in-btn-container">
                    <p className="sign-in-para">SIGN IN</p>
                    <Link to="/register" className="nav-link"><button className='join-button'>GET STARTED</button></Link>
                </div>
            </div>
            
        </nav>
        )
    }
}

export default Navbar
