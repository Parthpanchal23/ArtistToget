import React from 'react'

const Checkout = () => {
  return (
    <><div id="titlebar" class="gradient">
	<div class="container">
		<div class="row">
			<div class="col-md-12">

				<h2>Checkout</h2>

				<nav id="breadcrumbs" class="dark">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Pricing Plans</a></li>
						<li>Checkout</li>
					</ul>
				</nav>

			</div>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-xl-8 col-lg-8 content-right-offset">
			

			<h3>Billing Cycle</h3>

			<div class="billing-cycle margin-top-25">

				<div class="radio">
					<input id="radio-5" name="radio-payment-type" type="radio" checked />
					<label for="radio-5">
						<span class="radio-label"></span>
						Billed Monthly
						<span class="billing-cycle-details">
							<span class="regular-price-tag">$49.00 / month</span>
						</span>
					</label>
				</div>
			
				<div class="radio">
					<input id="radio-6" name="radio-payment-type" type="radio"/>
					<label for="radio-6"><span class="radio-label"></span>
						Billed Yearly
						<span class="billing-cycle-details">
							<span class="discounted-price-tag">$529.20 / year</span>
							<span class="regular-price-tag line-through">588.00 / year</span>
						</span>
					</label>
				</div>
			</div>
			

			<h3 class="margin-top-50">Payment Method</h3>

			<div class="payment margin-top-30">

				<div class="payment-tab payment-tab-active">
					<div class="payment-tab-trigger">
						<input checked id="paypal" name="cardType" type="radio" value="paypal"/>
						<label for="paypal">PayPal</label>
						<img class="payment-logo paypal" src="../../../i.imgur.com/ApBxkXU.png" alt=""/>
					</div>

					<div class="payment-tab-content">
						<p>You will be redirected to PayPal to complete payment.</p>
					</div>
				</div>


				<div class="payment-tab">
					<div class="payment-tab-trigger">
						<input type="radio" name="cardType" id="creditCart" value="creditCard"/>
						<label for="creditCart">Credit / Debit Card</label>
						<img class="payment-logo" src="../../../i.imgur.com/IHEKLgm.png" alt=""/>
					</div>

					<div class="payment-tab-content">
						<div class="row payment-form-row">

							<div class="col-md-6">
								<div class="card-label">
									<input id="nameOnCard" name="nameOnCard" required type="text" placeholder="Cardholder Name"/>
								</div>
							</div>

							<div class="col-md-6">
								<div class="card-label">
									<input id="cardNumber" name="cardNumber" placeholder="Credit Card Number" required type="text"/>
								</div>
							</div>

							<div class="col-md-4">
								<div class="card-label">
									<input id="expiryDate" placeholder="Expiry Month" required type="text"/>
								</div>
							</div>

							<div class="col-md-4">
								<div class="card-label">
									<label for="expiryDate">Expiry Year</label>
									<input id="expirynDate" placeholder="Expiry Year" required type="text"/>
								</div>
							</div>

							<div class="col-md-4">
								<div class="card-label">
									<input id="cvv" required type="text" placeholder="CVV"/>
								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
		
			<a href="pages-order-confirmation.html" class="button big ripple-effect margin-top-40 margin-bottom-65">Proceed Payment</a>
		</div>


		<div class="col-xl-4 col-lg-4 margin-top-0 margin-bottom-60">
			
			<div class="boxed-widget summary margin-top-0">
				<div class="boxed-widget-headline">
					<h3>Summary</h3>
				</div>
				<div class="boxed-widget-inner">
					<ul>
						<li>Standard Plan <span>$49.00</span></li>
						<li>VAT (20%) <span>$9.80</span></li>
						<li class="total-costs">Final Price <span>$58.80</span></li>
					</ul>
				</div>
			</div>

			<div class="checkbox margin-top-30">
				<input type="checkbox" id="two-step"/>
				<label for="two-step"><span class="checkbox-icon"></span>  I agree to the <a href="#">Terms and Conditions</a> and the <a href="#">Automatic Renewal Terms</a></label>
			</div>
		</div>

	</div>
</div>
</>
  )
}

export default Checkout