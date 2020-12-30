import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
      
      <tr>
        <td class="shoping__cart__item">
          <img src={img} alt=""/>
          <h5>{title}</h5>
        </td>
        <td class="shoping__cart__price">
          ${price}
        </td>
        <td class="shoping__cart__quantity">
          <div class="quantity">
            <div class="pro-qty">
              <span class="dec qtybtn btn" onClick={() => decrement(id)}>
                  <i class="fa fa-minus" />
                </span>
                <input type="text" value={count} />
              <span class="inc qtybtn btn" onClick={() => increment(id)}>
                <i class="fa fa-plus"/>
              </span>
            </div>
          </div>
        </td>
        <td class="shoping__cart__total">
          ${total}
        </td>
        <td class="shoping__cart__item__close">
          <span class="icon_close" onClick={() => removeItem(id)}>
            <i class="fa fa-times"/>
          </span>
        </td>
      </tr>
     
  );
}
