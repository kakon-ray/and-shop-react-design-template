import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings/build/star-ratings";
import PageBanner from "../PageBanner/PageBanner";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import useAddWishList from "../../Hooks/useAddWishList";
import useAddCompareList from "../../Hooks/useAddCompareList";
import useAddCart from "../../Hooks/useAddCart";

const ProductDetails = () => {
  const [shopItem, setShopItem] = useProducts([]);

  let { id } = useParams();

  const productDetailsitem = shopItem.filter((item) => item.id === id);
  const item = productDetailsitem[0];

  // use custome hook add wishlist addcomparelist and addtocart
  const { addTowishList } = useAddWishList(item, productDetailsitem);
  const { addToCompareList } = useAddCompareList(item, productDetailsitem);
  const { addTowCard } = useAddCart(item);

  return (
    <>
      <PageBanner page="Product Details" />
      <div id="product-details" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {productDetailsitem[0] && (
              <Card>
                <div className="row">
                  <div className="col-md-5">
                    <img
                      src={productDetailsitem[0].img}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-7 ">
                    <div className="mt-3 p-3">
                      <h2>{productDetailsitem[0].name}</h2>
                      <div className="d-flex aligen-items-center">
                        <StarRatings
                          className="py-3 "
                          rating={2.5}
                          starDimension="20px"
                          starSpacing="15px"
                          starRatedColor="#f79837"
                        />
                        <span className="mt-1 ms-3">
                          (Total 20 Customar Review)
                        </span>
                      </div>
                      <div className="my-3">
                        <h2>
                          {productDetailsitem[0].price}{" "}
                          <del style={{ color: "#f79837", marginLeft: "40px" }}>
                            $60.00
                          </del>
                        </h2>
                      </div>
                      <div>
                        <p className="text-secondary">
                          {productDetailsitem[0].text}
                        </p>
                      </div>
                      <div>
                        <select
                          className="my-2"
                          name=""
                          id="dress-size"
                          style={{
                            width: "200px",
                            height: "40px",
                            border: "1px solid #f79837",
                          }}
                        >
                          <option value="mediam">Size</option>
                          <option value="xl">XL</option>
                          <option value="small">S</option>
                          <option value="large">L</option>
                        </select>
                      </div>
                      <div className="my-3">
                        <p>
                          <span
                            className="product-details-wishlistz"
                            onClick={addTowishList}
                          >
                            <FontAwesomeIcon icon={faHeart} size="sm" />
                            Add To Wishlist
                          </span>
                          <span
                            className="ms-4 product-details-wishlistz"
                            onClick={addToCompareList}
                          >
                            <FontAwesomeIcon icon={faCodeCompare} size="sm" />
                            Add To Comparelist
                          </span>
                        </p>
                      </div>
                      <div className="my-2">
                        <Button variant="dark" onClick={addTowCard}>
                          {" "}
                          Add to Cart
                          <FontAwesomeIcon
                            icon={faShoppingCart}
                            size="sm"
                            className="ms-1"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
