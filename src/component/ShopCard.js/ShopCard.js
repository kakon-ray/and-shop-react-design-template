/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

import "./ShopCard.css";

import { ViewListIcon } from "@heroicons/react/solid";
import { SwitchHorizontalIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { wishListContext } from "../../Contexts/wishListContext";
import { toast } from "react-toastify";
import { CartContext } from "../../Contexts/CartContext";
import { CompareContext } from "../../Contexts/CompareContext";
import { Link } from "react-router-dom";

const ShopCard = ({ position, title, price, img, img1, item }) => {
  const [wishList, setWishList] = useContext(wishListContext);
  const [cartList, setCartList] = useContext(CartContext);
  const [compareList, setCompareList] = useContext(CompareContext);

  const addTowishList = () => {
    const exist = wishList.find((wishItem) => wishItem?.id === item.id);

    if (!exist) {
      setWishList([
        ...wishList,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          text: item.text,
          img: item.img,
          img2: item.img2,
          value: item.value,
        },
      ]);
      toast.success(" Successfully Added in Wishlist");
    } else if (exist) {
      toast.error("Already Added in Wishlist");
    }
  };

  const addTowCard = () => {
    const exist = cartList.find((cartItem) => cartItem?.id === item.id);
    // console.log(item);
    // console.log(cartList);
    if (!exist) {
      setCartList([
        ...cartList,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          text: item.text,
          img: item.img,
          img2: item.img2,
          value: item.value,
        },
      ]);
      toast.success(" Successfully Added in Cartlist");
    } else if (exist) {
      toast.error("Already Added in Cartlist");
    }
  };

  const addToCompareList = () => {
    const exist = compareList.find(
      (compareItem) => compareItem?.id === item.id
    );

    if (!exist && compareList.length < 4) {
      setCompareList([
        ...compareList,
        {
          ...item,
        },
      ]);
      toast.success(" Added in Compare List");
    } else if (exist) {
      toast.error("Already Added in Compare List");
    } else {
      toast.error("Do not add more then 4 item ");
    }
  };

  return (
    <div className="col-md-3" id="shop-card">
      <Card className="card-container">
        <div className="img-container">
          <img src={img} className="img-fluid" />

          <img src={img1} className="upper-image img-fluid" />
        </div>

        <Card.Body className="text-center">
          <Card.Text>{title}</Card.Text>
          <h5>{price}</h5>
        </Card.Body>
        <span className="badge-container p-0">
          <span className="badge">{position}</span>
        </span>

        <div className="overly-container">
          <button
            className="btn btn-light overly-content-btn"
            onClick={addTowCard}
          >
            Add to Cart
          </button>
          <div className="overly-content-icon d-flex flex-column gap-4">
            {["top"].map((placement) => (
              <OverlayTrigger
                key={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>Wish List</Tooltip>
                }
              >
                <button className=" icon-btn" onClick={addTowishList}>
                  <FontAwesomeIcon icon={faHeart} className="badge" size="lg" />
                </button>
              </OverlayTrigger>
            ))}

            {["top"].map((placement) => (
              <OverlayTrigger
                key={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>Quick View</Tooltip>
                }
              >
                <Link to={`${item.id}`}>
                  <button className=" icon-btn">
                    <FontAwesomeIcon icon={faEye} className="badge" size="lg" />
                  </button>
                </Link>
              </OverlayTrigger>
            ))}

            {["top"].map((placement) => (
              <OverlayTrigger
                key={placement}
                overlay={<Tooltip id={`tooltip-${placement}`}>Compare</Tooltip>}
              >
                <button className=" icon-btn" onClick={addToCompareList}>
                  <FontAwesomeIcon
                    icon={faCodeCompare}
                    className="badge"
                    size="lg"
                  />
                </button>
              </OverlayTrigger>
            ))}

            {/* <ViewListIcon className="h-7 w-7 text-light-500 badge my-3" />
            <SwitchHorizontalIcon className="h-7 w-7 text-light-500 badge my-3" /> */}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ShopCard;
