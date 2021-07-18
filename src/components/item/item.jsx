import React from "react";
import { Link } from "react-router-dom";
import "./item.scss";

export const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      <article className="item" id={item.id}>
        <div className="wrapper">
          <div className="column">
            <div className="itemPicture">
              <img src={item.pictureUrl} alt={item.alt} />
            </div>
            <div className="itemBody column">              
              <div className="itemTitle">
                <h3>{item.title}</h3>
              </div>
              <p className='noStock' hidden={item.stock === 0 ? false : true}><span>Agotado</span></p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
