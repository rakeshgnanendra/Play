import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../context";

export default function Cart() {
  return (
    <section>
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <section class="breadcrumb-area banner_area">
	              <div class="banner_text">
									<h3 class="tt-title">Shoping Cart</h3>
								</div>
              </section>
              <section class="shoping-cart spad">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="shoping__cart__table">
                        <table>
                          <CartColumns />
                          <CartList value={value} />
                        </table>
                      </div>
                    </div>
                  </div>
                  <CartTotals value={value} />
                </div>
              </section>   
              </React.Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
}
