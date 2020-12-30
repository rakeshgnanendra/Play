import React from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
export default function EmptyCart() {
    let history = useHistory();
  
     
  return (
   <h3>Congratulations !!! Your Payment is Successfully completed .Your Order reference id: FNC3456213 </h3>
   
  );
}