import React from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
export default function EmptyCart() {
    let history = useHistory();
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }
    
    const __DEV__ = document.domain === 'localhost'
    async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_uGoq5ABJztRAhk' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'FNC',
			description: 'Thanks for shopping on FNC',
			image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
                alert(response.razorpay_signature)
                history.push("/Payments");
                
			},
			prefill: {
			
				email: 'fnc@gmail.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}
  return (
    <section>
    <section class="breadcrumb-area banner_area">
	        <div class="banner_text">
					  <h3 class="tt-title">Payment Methods</h3>
				  </div>
           </section>
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-4 mx-auto text-center text-title"></div>
      <div className="col-md-2 mx-auto text-center text-title">
      <Link to="/Cashod">
          <button type="submit" className="btn btn-primary">Cash On Delivery</button>
          </Link>
         
    </div>
    <div className="col-md-2 mx-auto text-center text-title">
    <div className="form-group">
    
    <button type="submit" 	onClick={displayRazorpay}
    target="_blank"
    rel="noopener noreferrer" className="btn btn-primary">Proceed To Pay</button>
  
</div>
    </div>
    <div className="col-md-4 mx-auto text-center text-title"></div>
    </div>
    </div>
    </section>
  );
}