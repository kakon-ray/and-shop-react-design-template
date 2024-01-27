import React, { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { wishListContext } from "../../Contexts/wishListContext";
import PageBanner from "../../component/PageBanner/PageBanner";

const WishListPage = () => {
  const [value, setValue] = useState("");
  const [wishList, setWishList] = useContext(wishListContext);

  const total = 5;

  const removeItem = (id) => {
    const removeThenCartItem = wishList.filter(
      (listItem) => listItem?.id !== id
    );
    setWishList([...removeThenCartItem]);
    // console.log(removeThenCartItem);
  };

  const handleChangeSinglePost = (value, id) => {
    console.log("value>>>", value);
    console.log("id>>>", id);
  };

  return (
    <>
      <PageBanner page="Wishlsit" />
      <div className="my-5 container-fluid cart-page">
        <div className="row table-responsive">
          <table className="table">
            <thead>
              <tr id="table-tr-bg">
                <th scope="col">Remove</th>
                <th scope="col">Image</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
              </tr>
            </thead>

            <tbody className="text-center text-justify">
              {wishList.map(
                (item) =>
                  item && (
                    <React.Fragment key={item?.id}>
                      <tr key={item.id}>
                        <th scope="row">
                          <FontAwesomeIcon
                            icon={faTrash}
                            size="lg"
                            className="text-danger pt-4"
                            onClick={() => removeItem(item.id)}
                          />
                        </th>

                        <td>
                          <img
                            src={item.img}
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                        </td>
                        <td>
                          <p className="mt-4">{item.name}</p>
                        </td>
                        <td>
                          <p className="mt-4">{item.price}</p>
                        </td>
                      </tr>
                    </React.Fragment>
                  )
              )}
            </tbody>
          </table>
          {wishList.length <= 0 && (
            <p style={{ fontSize: "30px" }} className="text-center py-5">
              No item Wishlist
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default WishListPage;
