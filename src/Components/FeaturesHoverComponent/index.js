import { Component } from "react";
import './index.css'

class FeaturesHoverComponent extends Component{
    render(){
        return(
            <div className="hover-popup">
            <ul className="nav-hover-un-ordered-list-container" id="submenu">
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="sales" className="nav-hover-icons" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689051924/dollar-sign_pvxdbh.png" />
                    </div>
                    <div>Sales</div>
                </li>
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="product" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689052255/inventory_djfiqn.png" />
                    </div>
                    <div>Product Management</div>
                </li>
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="customer" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689052449/icons8-staff-96_x1vexs.png" />
                    </div>
                    <div>Customer Resource Management</div>
                </li>
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="accounting" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689052525/payment_nf65au.png" />
                    </div>
                    <div>Accounting and Finance</div>
                </li>
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="document"  src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689052566/document_z1qjx9.png" />
                    </div>
                    <div>Documents Management System</div>
                </li>
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="point" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689052566/document_z1qjx9.png"/>
                    </div>
                    <div>Point of Sales</div>
                </li>

                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="task" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689052722/icons8-to-do-96_f2piyq.png" />
                    </div>
                    <div>Task Management</div>
                </li>
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="ticketing" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689052769/account_axn4j7.png  " />
                    </div>
                    <div>Ticketing</div>
                </li>
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="inventory" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689052826/icons8-warehouse-96_ahvr37.png" />
                    </div>
                    <div>Inventory Management</div>
                </li>
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="hrm" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689052091/handshake_vjumhi.png" />
                    </div>
                    <div>HRM</div>
                </li>
                <li className="nav-hover-list-container">
                    <div className="hover-icons">
                        <img alt="reports" src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1689052566/document_z1qjx9.png" />
                    </div>
                    <div>Reports and Analytics</div>
                </li>

            </ul>
            </div>
        )
    }
}

export default FeaturesHoverComponent