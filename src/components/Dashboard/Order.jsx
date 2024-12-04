import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <div className="dashboard-box">
    <div className="headline">
        <h3><i className="icon-material-outline-assignment"></i> Orders</h3>
    </div>
    <div className="content">
        <ul className="dashboard-box-list">
            <li>
                <div className="invoice-list-item">
                <strong>Professional Plan</strong>
                    <ul>
                        <li><span className="unpaid">Unpaid</span></li>
                        <li>Order: #326</li>
                        <li>Date: 12/08/2018</li>
                    </ul>
                </div>
                <div className="buttons-to-right">
                    <Link to="pages-checkout-page.html" className="button">Finish Payment</Link>
                </div>
            </li>
            <li>
                <div className="invoice-list-item">
                <strong>Professional Plan</strong>
                    <ul>
                        <li><span className="paid">Paid</span></li>
                        <li>Order: #264</li>
                        <li>Date: 10/07/2018</li>
                    </ul>
                </div>
                <div className="buttons-to-right">
                    <Link to="pages-invoice-template.html" className="button gray">View Invoice</Link>
                </div>
            </li>
            <li>
                <div className="invoice-list-item">
                <strong>Professional Plan</strong>
                    <ul>
                        <li><span className="paid">Paid</span></li>
                        <li>Order: #211</li>
                        <li>Date: 12/06/2018</li>
                    </ul>
                </div>
                <div className="buttons-to-right">
                    <Link to="pages-invoice-template.html" className="button gray">View Invoice</Link>
                </div>
            </li>
            <li>
                <div className="invoice-list-item">
                <strong>Professional Plan</strong>
                    <ul>
                        <li><span className="paid">Paid</span></li>
                        <li>Order: #179</li>
                        <li>Date: 06/05/2018</li>
                    </ul>
                </div>
                <div className="buttons-to-right">
                    <Link to="pages-invoice-template.html" className="button gray">View Invoice</Link>
                </div>
            </li>
        </ul>
    </div>
</div>
  )
}

export default Order