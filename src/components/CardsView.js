import React from "react";
import PropTypes from 'prop-types';

function CardsView(props) {
    const {products} = props;

    function renderCards(arr) {
        return (
            <div className="products">
                {arr.map((el, index) => { 
                    return (
                        <div className="card" key={index}>
                            <h1 className="product-name">{el.name}</h1>
                            <h2 className="product-color">{el.color}</h2>
                            <img className="product-img" src={el.img} alt={el.name} />
                            <p className="product-price">£{el.price}</p>
                            <button className="add-to-cart">Add to cart</button>
                        </div>
                    );
                })};
            </div>
        );
    };

    return (        
        <div>
            {renderCards(products)}
        </div>
        );
};

CardsView.propTypes = {
    item: PropTypes.array
};

export default CardsView;