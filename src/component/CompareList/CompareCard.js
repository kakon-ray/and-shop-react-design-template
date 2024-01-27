import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import StarRatings from "react-star-ratings/build/star-ratings";

const CompareCard = ({ item, addTowCard, removeCompareList }) => {
  return (
    <div className="col-md-6 px-0 mx-0">
      {item ? (
        <Card className="text-center">
          <Card.Img
            variant="top"
            style={{ height: "600px" }}
            className="img-fluid"
            src={item.img}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>

            <Card.Text>{item.price}</Card.Text>
            <div className="mb-3">
              <StarRatings
                className="py-3 "
                rating={2.5}
                starDimension="20px"
                starSpacing="15px"
                starRatedColor="#f79837"
              />
            </div>
            <div
              style={{ height: "100px", overflow: "auto" }}
              className="d-flex align-items-center"
            >
              <p>{item.text}</p>
            </div>

            <div className="my-3">
              <Button variant="dark" onClick={() => addTowCard(item)}>
                {" "}
                Add to Cart
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size="sm"
                  className="ms-1"
                />
              </Button>

              <span className="ms-2 my-2">
                <Button
                  variant="dark"
                  onClick={() => removeCompareList(item.id)}
                >
                  {" "}
                  Remove Cart
                  <FontAwesomeIcon icon={faTrash} size="sm" className="ms-1" />
                </Button>
              </span>
            </div>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default CompareCard;
