import React, { useContext } from "react";
import {
  Button,
  FormControl,
  InputGroup,
  Offcanvas,
  OffcanvasBody,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { wishListContext } from "../../../Contexts/wishListContext";

import OffCanvasCard from "../OffCanvasCard/OffCanvasCard";

const WishListShow = ({ handleClosWishLIst, placement, showWishList }) => {
  const [wishList, setWishList] = useContext(wishListContext);

  const removeItem = (id) => {
    const removeThenCartItem = wishList.filter(
      (listItem) => listItem?.id !== id
    );
    setWishList([...removeThenCartItem]);
    // console.log(removeThenCartItem);
  };

  return (
    <Offcanvas
      show={showWishList}
      onHide={handleClosWishLIst}
      placement={placement}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-center mx-auto textwarning">
          AND SHOP
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {wishList.map((item) =>
          item ? (
            <OffCanvasCard item={item} removeItem={removeItem} key={item.id} />
          ) : (
            ""
          )
        )}

        {wishList.length <= 0 ? (
          <h6 className="text-center">No Item in the Wish List</h6>
        ) : (
          ""
        )}

        {wishList.length > 0 ? (
          <Link to="/wishlistpage">
            <div className="text-center">
              <Button variant="outline-warning">View Wishlist</Button>
            </div>
          </Link>
        ) : (
          ""
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default WishListShow;
