import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <footer className='footer m-3 p-2'>
      <div className='container-fluid pt-4 pb-2'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='image'>
              <h1 className='azonixfont' style={{ color: '#2b88c4' }}>TAXPRO</h1>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='image'>
              <h4>BLOG</h4>
              <ul className='list list-unstyled'>
                <li><a href='#' className='link'>What is zacta phase | ?</a></li>
                <li><a href='#' className='link'>What is zacta phase || ?</a></li>
              </ul>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='image'>
              <h4>LINKS</h4>
              <ul className='list list-unstyled'>
                <li><a href='#' className='link'>Contact us</a></li>
                <li><a href='#' className='link'>Compliance</a></li>
                <li><a href='#' className='link'>Feedback</a></li>
              </ul>
            </div>
          </div>
          <div className='col-md-3'>
            <strong>Taxpro</strong>
            <ul className='list-unstyled'>
              <li>Saudi Arabia</li>
              <li>UAE</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-10'>
            <p>Zatca compatible E-Invoicing software for Saudi Arabia<span>© Taxpro 2022</span></p>
          </div>
          <div className='col-md-2 text-right'>
            <select value={selectedOption} onChange={handleSelectChange} className='form-control'>
              <option value='option1'>Arabic</option>
              <option value='option2'>English</option>
            </select>
          </div>
        </div>
        <div className='row pt-4'>
          <div className='col-md-10'>
            <div className='about'>
              <a href='#' className='link p-3'>About</a>
              <a href='#' className='link p-3'>Terms</a>
              <a href='#' className='link p-3'>Privacy</a>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='social-icons float-left'>
              <ul className='list-inline'>
                <li className='list-inline-item p-3'><FaTwitter /></li>
                <li className='list-inline-item p-3'><FaInstagram /></li>
                <li className='list-inline-item p-3'><FaYoutube /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        .link {
          color: inherit !important;
          text-decoration: none !important;
        }
        `}
      </style>
    </footer>
  );
};

export default Footer;
