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
    <img src="img/Bannercake2.png" className="sliderimg"/>
    <img src="img/Bannerplant2.png" className="sliderimg"/>
    <img src="img/Bannercake1.png" className="sliderimg"/>
    <img src="img/Bannerflower2.jpg" className="sliderimg"/>
    <img src="img/Bannerplant1.png" className="sliderimg"/>
    <img src="img/Bannerflower3.jpg" className="sliderimg"/>    
    <img src="img/Bannerplant3.png" className="sliderimg"/>      
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
