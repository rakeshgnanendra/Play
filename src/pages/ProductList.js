import React, { Component } from "react";
import Product from "../components/Product";
import Title from "../components/Title";
import { ProductConsumer } from "../context";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid bg-white">
          <div class="row bg-white">
            <div class="col-md-3"></div>
            <div class="col-md-2">
              <div class="product_img">
                <img class="img-thumbnail" src="https://m-i7.fnp.com/assets/images/custom/new-mobile-home/top-banners/9-Mixed-Flowers-15-oct-2020.jpg"></img>
                <h6>Bouquets</h6>
              </div>
            </div>
            <div class="col-md-2">
              <div class="product_img">
                <img class="img-thumbnail" src="https://m-i7.fnp.com/assets/images/custom/new-mobile-home/top-banners/cakes-19-aug-2020.jpg"></img>
                <h6>Cakes</h6>
              </div>
            </div>
            <div class="col-md-2">
              <div class="product_img">
                <img class="img-thumbnail" src="https://m-i7.fnp.com/assets/images/custom/new-mobile-home/top-banners/8-Indoor-Plants-15-oct-2020.jpg"></img>
                <h6>Plants</h6>
              </div>
            </div>
            <div class="col-md-3"></div>
        </div>
        </div>
<div className="App">
  <AliceCarousel infinite disableDotsControls disableButtonsControls autoPlay autoPlayInterval="3000">
    <img src="https://img.floweraura.com/sites/default/files/combos%20for%20cakes%20landing%20page.jpg" />
    <img src="https://img.floweraura.com/sites/default/files/birthday_cake_landing_page_d%20(1).jpg" /> 
    <img src="https://img.floweraura.com/sites/default/files/exotic_flowers_landing_page_d.jpg" />      
  </AliceCarousel>
</div>
        <div className="py-3">
          <div className="container">
            <Title name="our Products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
