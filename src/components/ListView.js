import React from "react";
import PropTypes from 'prop-types';

function ListView(props) {
    const {products} = props;

    function renderList(arr) {
        return (
            <div className="products">
                {arr.map((el, index) => { 
                    return (
                        <div className="list-item" key={index}>
                            <img className="product-img" src={el.img} alt={el.name} />
                            <h1 className="product-name">{el.name}</h1>
                            <h2 className="product-color">{el.color}</h2>
                            <p className="product-price">£{el.price}</p>
                            <button className="add-to-cart">Add to cart</button>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (        
        <div>
            {renderList(products)}
        </div>
    );
};

ListView.propTypes = {
    item: PropTypes.array
};

export default ListView;