import React from "react";
import { Link } from 'react-router-dom';
export default function EmptyCart() {
  
  return (
    
    <section>
    <section class="breadcrumb-area banner_area">
      <div class="banner_text">
        <h3 class="tt-title">Order Placed</h3>
      </div>
       </section>
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-12 mx-auto text-title">
      <div class="shadow p-5 mb-3 text-center">
      <h4>congratulations !!! You have Successfully placed your Order Reference No: <b>FNC3456213</b></h4>
      </div>   
      <div class="p-3">
        <h5><strong>To pay by cash safely on Order delivery , we recommend following steps to minimize contact and ensure social distansing.</strong></h5>
        </div> 
       <div>
          <ul>
            <li>Delivery agent will keep the order at your door and step back by 2 meters.</li>
            <li>Place money on top of the package & stepback by 2 meters while the agents collects the cash.</li>
          </ul>
        </div> 
        <div class="p-5 mb-3 text-center">
          <h3>Stay Home and stay safe....... <br></br>Thank you for shopping with FNC</h3>
       </div>
    </div>
    </div>
    </div>
   </section>
  );
}