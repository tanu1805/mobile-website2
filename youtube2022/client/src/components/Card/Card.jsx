import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
 console.log("mobile",item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {/* {item?.attributes.isNew && <span>New Season</span>} */}
          <span>New Season</span>
          <img
            src={item?.imageUrl}
            alt=""
            className="mainImg"
          />
          <img
            src={item?.imageUrl}
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.name}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.price + 50}</h3>
          <h3>${item?.price}</h3>
        </div>

      </div>
    </Link>
  );
};

export default Card;
