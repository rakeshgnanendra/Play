import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import logo from "../logo.svg";
import Logo1 from "../FNC_logo.jpg"
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
            <img src={Logo1} alt="store" className="navbar-brand" />
            </Link>
          </li>
        </ul>
        <input type="search" data-ga-element="ga-element" data-ga-title="Search" placeholder="46,734 Gifts to Choose from" name="qs" id="main-search" class="ui-autocomplete-input main-search" autocomplete="off" value="" />
        <div class="ml-auto">
          <Link to="/cart">
            <button type="button" class="btn btn-outline-warning btn-sm mr-1">
              <span className="mr-1">
                <i className="fas fa-cart-plus" />
              </span>
              my cart
            </button>
          </Link>
          <Link to="/cart">
            <button type="button" class="btn btn-outline-warning btn-sm mr-1">
              <span className="mr-1">
                <i className="fas fa-user-circle" />
              </span>
              Customer Login
            </button>
          </Link>
          <Link to="/cart">
          <button type="button" class="btn btn-outline-warning btn-sm mr-1">
            <span className="mr-1">
              <i className="fas fa-user" />
            </span>
            Admin Login
          </button>
        </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
