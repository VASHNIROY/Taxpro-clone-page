import { Component } from "react";
import './index.css'

class ContactusHoverComponent extends Component{
    render(){
        return(
            <div className="hover-popup">
            <ul className="nav-contact-hover-un-ordered-list-container" id="submenu">
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="sales" className="nav-hover-icons" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689058520/icons8-headset-96-c_ecnpq5.png" />
                    </div>
                    <div>Contact for Sales Enquiry</div>
                </li>
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="technical" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689058473/icons8-tools-96_x5ntbq.png" />
                    </div>
                    <div>Contact for Technical Support</div>
                </li>
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="general" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689058483/account_xdfmys.png" />
                    </div>
                    <div>General Enquiry</div>
                </li>
            </ul>
            </div>
        )
    }
}

export default ContactusHoverComponent