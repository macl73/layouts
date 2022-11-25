import React, {useState} from "react";
import PropTypes from 'prop-types';
import IconSwitch from './IconSwitch.js';

const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

function Store() {

  const [icon, setIcon] = useState("view_list");

  function handleSwitch() {
    setIcon(icon === "view_list" ? "view_module" : "view_list");
  };

  return (
    <div className="main-content">
        <IconSwitch 
          products={products}
          icon={icon}
          onSwitch={(icon) => handleSwitch(icon)}/>
   </div>
  );
};

Store.propTypes = {
  products: PropTypes.array,
  icon: PropTypes.string,
  onSwitch: PropTypes.func
};

export default Store;