import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../components/Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            inCart,
            company,
            img,
            info,
            price,
            title
          } = value.detailProduct;
          return (
            <div class="bg-white">
              <section class="breadcrumb-area banner_area">
	              <div class="banner_text">
									<h3 class="tt-title">{title}</h3>
								</div>
              </section>
              <div className="container">
                <div className="row">
                {/* product info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src={img} className="img-fluid imageshadow" alt="product" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>{title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2" />
                    <h4 className="text-blue">
                      <strong>
                        price: <span>$</span>
                        {price} <span>/-</span>
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Description
                    </p>
                    <p className="text-muted">{info}</p>
                    {/* buttons */}
                    <div>
                      <Link to="/">
                        <button type="button" class="btn btn-primary btn-sm mr-2">Back to Product</button>
                      </Link>
                      <button type="button" class="btn btn-warning btn-sm mr-2"
                        cart
                        disabled={inCart ? true : false}
                        onClick={id => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "Add to cart"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
