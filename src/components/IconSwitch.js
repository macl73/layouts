import React from "react";
import PropTypes from 'prop-types';
import CardsView from './CardsView.js';
import ListView from './ListView.js';

function IconSwitch(props) {
    const {products} = props;
    const {onSwitch} = props;
    const {icon} = props;

    return (
        <div className="shop">
            <div onClick={onSwitch} className={icon}>
                <span className="material-symbols-outlined">{icon === "view_list" ? "calendar_view_month" : "list"}</span>
            </div>
            <div className="products-container">
                {icon === "view_list" ? <CardsView products={products} /> : <ListView products={products} />}
            </div>
        </div>
    );
};

IconSwitch.propTypes = {
    products: PropTypes.array
};

export default IconSwitch;