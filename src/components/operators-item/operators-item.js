import React from "react";

import "./operators-item.css";


const OperatorItem = ({ item, onItemClick }) => {
    
    let content;
    if (item.coverImage) {
        content = (
            <img src={item.coverImage}
                 alt="operators-logo"/>
        )
    } else {
        content = <h3>{item.title}</h3>
    }
    
    return (
        <div className="item__wrapper">
            {content}
            <button
                className="item__btn"
                onClick={onItemClick} >
                Оплатить
            </button>
        </div>
    )
};

export default OperatorItem;