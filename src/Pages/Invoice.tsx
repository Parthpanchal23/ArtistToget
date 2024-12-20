import React from 'react'
import  "../styles/invoice.css"
const Invoice = () => {
  return (
    <>
    <div className="print-button-container">
	<a href="javascript:window.print()" className="print-button">Print this invoice</a>
</div>

<div id="invoice">

	<div className="row">
		<div className="col-xl-6">
			<div id="logo"><img src="./logo.png" alt=""/></div>
		</div>

		<div className="col-xl-6">	

			<p id="details">
				<strong>Order:</strong> #00124 <br/>
				<strong>Issued:</strong> 20/08/2018 <br/>
				Due 7 days from date of issue
			</p>
		</div>
	</div>


	<div className="row">
		<div className="col-xl-12">
			<h2>Invoice</h2>
		</div>

		<div className="col-xl-6">	
			<strong className="margin-bottom-5">Supplier</strong>
			<p>
				Hireo Ltd. <br/>
				21 St Andrews Lane <br/>
				London, CF44 6ZL, UK <br/>
			</p>
		</div>

		<div className="col-xl-6">	
			<strong className="margin-bottom-5">Customer</strong>
			<p>
				John Doe <br/>
				36 Edgewater Street <br/>
				Melbourne, 2540, Australia <br/>
			</p>
		</div>
	</div>


	<div className="row">
		<div className="col-xl-12">
			<table className="margin-top-20">
				<tr>
					<th>Description</th>
					<th>Price</th>
					<th>VAT (20%)</th>
					<th>Total</th>
				</tr>

				<tr>
					<td>Standard Plan</td> 
					<td>$49.00</td>
					<td>$9.80</td>
					<td>$58.80</td>
				</tr>
			</table>
		</div>
		
		<div className="col-xl-4 col-xl-offset-8">	
			<table id="totals">
				<tr>
					<th>Total Due</th> 
					<th><span>$58.80</span></th>
				</tr>
			</table>
		</div>
	</div>


	<div className="row">
		<div className="col-xl-12">
			<ul id="footer">
				<li><span>www.example.com</span></li>
				<li><a href="http://www.vasterad.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="670801010e040227021f060a170b024904080a">[email&#160;protected]</a></li>
				<li>(123) 123-456</li>
			</ul>
		</div>
	</div>
		
</div>
</>
  )
}

export default Invoice;