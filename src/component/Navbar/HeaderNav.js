import React, { useContext, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  Container,
  NavDropdown,
  Nav,
  Button,
  Offcanvas,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./HeaderNav.css";
import OffCanvas from "../OffCanvas/OffCanvasSearch/OffCanvas";

import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { wishListContext } from "../../Contexts/wishListContext";
import { CartContext } from "../../Contexts/CartContext";
import CartShow from "../OffCanvas/CartShow/CartShow";
import WishListShow from "../OffCanvas/WishListShow/WishListShow";

const HeaderNav = () => {
  // this hooks use search btn show
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // this hooks use Shoping cart show btn
  const [showCart, setShowCart] = useState(false);

  const handleClosCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  // this hooks use wishlist show btn
  const [showWishList, setShowWishList] = useState(false);

  const handleClosWishLIst = () => setShowWishList(false);
  const handleShowWishList = () => setShowWishList(true);

  const [wishList, setWishList] = useContext(wishListContext);
  const [cartList, setCartList] = useContext(CartContext);

  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            AND SHOP
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 d-flex  align-items-center "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <CustomLink to="/" className="nav-link">
                Home
              </CustomLink>
              <CustomLink to="/shop" className="nav-link">
                Shop
              </CustomLink>

              <NavDropdown
                title="SHOP"
                id="navbarScrollingDropdown"
                className="shopContainer"
              >
                <div className="row shop">
                  <div className="col-md-4">
                    <NavDropdown.Item href="#action3">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </div>
                  <div className="col-md-4">
                    <NavDropdown.Item href="#action3">SHOP</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </div>
                  <div className="col-md-4">
                    <img
                      src="https://andshop-react.netlify.app/static/media/nav_banner.e87f5849.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </NavDropdown>
              <NavDropdown title="FEATURE" id="navbarScrollingDropdown">
                <CustomLink to="/shop" className="nav-link">
                  Shop
                </CustomLink>
              </NavDropdown>
              <NavDropdown title="BLOG" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">BLOG</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PAGEs" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">PAGE</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className="navbar-shop d-flex flex-nowrap aligen-item-center mb-0 pb-0">
            <Button
              variant=""
              className="navbar-icon   position-relative  pb-0 "
              onClick={handleShowWishList}
            >
              <FontAwesomeIcon icon={faHeart} size="xl" />
              <span className="position-absolute  translate-middle badge rounded-pill p-1">
                {wishList.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </Button>
            <Button
              variant=""
              className="navbar-icon  position-relative  pb-0 "
              onClick={handleShowCart}
            >
              <FontAwesomeIcon icon={faShoppingBag} size="xl" />
              <span className="position-absolute top-5 start-99 translate-middle badge rounded-pill p-1">
                {cartList.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </Button>
            <Button
              variant=""
              className="navbar-icon pb-0 "
              onClick={handleShow}
            >
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </Button>
            {/* <Button variant="" className="navbar-icon mt-0 pt-0 ">
                <FontAwesomeIcon icon={faBars} size="lg" />
              </Button> */}
          </div>
        </Container>
      </Navbar>

      {/* this is offcanvas section */}

      <OffCanvas show={show} onHide={handleClose} placement={"start"} />
      <CartShow
        showCart={showCart}
        onHideCart={handleClosCart}
        placement={"end"}
      />
      <WishListShow
        wishList={wishList}
        showWishList={showWishList}
        handleClosWishLIst={handleClosWishLIst}
        placement={"end"}
      />
    </>
  );
};

export default HeaderNav;
