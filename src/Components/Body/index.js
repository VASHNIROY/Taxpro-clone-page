import { Component } from "react";
import './index.css'

class HomePage extends Component{
    render() {
        return (
            <div className="registration-details-container">
                <div className="container-fluid">
                    <h2 className="registration-details-container-heading">Fast & Reliable ZATCA compatible e-Invoicing Software</h2>
                    <p className="registration-para">Taxpro is an approved vendor of ZATCA where you get a fast & reliable ZATCA compatible e-Invoicing software that gives you a hassle-free experience of e-Invoicing in KSA.</p>
                    <button className="register-btn">REGISTER FOR FREE</button>
                </div>
                <img alt='meeting' className="meeting-image" src='https://taxpro.ai/images/index/10.jpg' />
             </div>
        );
    }
}

export default HomePage