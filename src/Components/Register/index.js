import { Component } from "react";
import Footer from "../Footer";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class Register extends Component{
    render() {
        return (
            <>
                <div className=" p-t-10 p-b-30">
                    <div className="main-container container-fluid p-30">
                        <div className="row-container row">
                            <div className="col-md-12 p-b-20">
                                <center>
                                    <h1 className="register-heading">Register to Taxpro and meet the ease.</h1>
                                    <p className="register-page-description">Taxpro is a zatca compatible einvoice software ready for all business</p>
                                </center>
                            </div>
                            <div className="form-main-container col-md-6 card">
                                <form className="register-form-inner-container"  method="POST">
                                    <div className="row p-t-30">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className=""> Name  <sup>*</sup> </label>
                                                <input type="text" placeholder="" name="name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group m-b-5">
                                                <label className="">Mobile <sup>*</sup> </label>
                                                <div className="mobile-input-container row p-l-20 p-r-20">
                                                    <div className="col-md-3 p-0 m-0">
                                                    <select className="coutry-code-dropdown-menu" style={{ borderRadius: '5px 0px 0px 5px' }} name="code_of_countrie">
                                                            <option value="+973"> +973 </option>
                                                            <option value="+965"> +965 </option>
                                                            <option value="+968"> +968 </option>
                                                            <option value="+974"> +974 </option>
                                                            <option value="+966"> +966 </option>  
                                                            <option value="+971"> +971 </option>  
                                                            <option value="+967"> +967 </option> 
                                                            <option value="+98">  +98</option> 
                                                            <option value="+964"> +964 </option>
                                                    </select>  
                                                    </div>
                                                    <div className="col-md-9 p-0 m-0">
                                                        <input type="text" placeholder="" required="" name="mobile" className="form-control"  />  
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="">Email  <sup>*</sup> </label>
                                                <input type="email" placeholder="" name="email" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group m-b-5">
                                                <label className="">Password  <sup>*</sup></label>
                                                <input type="password" placeholder="" id="pass" name="password" required className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group m-b-5">
                                                <label className="">Confirm Password <sup>*</sup>  </label>
                                                <input type="password" id="c_pass" placeholder="" name="" className="form-control" />
                                            </div>
                                            <div id="pass_err"></div>
                                        </div>
                                        {/* <!-- <div className="col-md-6">
                                            <div className="form-group m-b-5">
                                                <label className="">Country Code </label>
                                                <input type="text" placeholder="" name="country_code" className="form-control" />
                                            </div>
                                        </div> --> */}
                                    </div>
                                        <div className="form-group text-center p-t-30">
                                            <button className="btn-get" style={{width: 150}} type="submit">Submit</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Register