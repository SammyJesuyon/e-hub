import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import ContactUs from './ContactUs';



export default class Navbar extends Component {
    render() {
        return (
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

                    <Link to="/">
                        <div><img src = "logo192.png" /></div>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                products
                            </Link>
                        </li>
                    <li className="nav-item ml-5">
                        <Link to="/contactus" className="nav-link">
                            contact us
                        </Link>
                    </li>
                    </ul>
                    <Link to='/cart' className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus" />
                            </span>
                            My cart
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
  background : #3f786b;
  .nav-link{
      color : white !important;
      font-size : 1.3rem;
      text-transform : capitalize;
  };
  .logo-head{
    color: #F1C40F;
    font-family: comic-sans;
  };
`