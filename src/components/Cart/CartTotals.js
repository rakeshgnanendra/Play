import React from "react";
import { Link } from "react-router-dom";
import PaypalButton from '../../components/PaypalButton';

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
       <div class="row">
<div class="col-lg-12">
<div class="shoping__cart__btns">
<a href="/" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
<a href="#" class="primary-btn cart-btn cart-btn-right" onClick={() => clearCart()}>
Clear Cart</a>
</div>
</div>
<div class="col-lg-6"></div>
<div class="col-lg-6">
<div class="shoping__checkout">
<h5>Cart Total</h5>
<ul>
<li>Subtotal <span>${cartSubTotal}</span></li>
<li>Tax <span>${cartTax}</span></li>
<li>Total <span>${cartTotal}</span></li>
</ul>
<a href="/Newdelivery" class="primary-btn">PROCEED TO CHECKOUT</a>
</div>
</div>
</div>
    </React.Fragment>
  );
}
