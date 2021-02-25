import React from 'react';
import '../index.css'
import image from "../image.png"

const Header = ({headerExpanded}) => {
    return (
        <div className="head-container">
            <img src={image} className={`head-image ${headerExpanded? 'head-image-expanded':'head-image-contracted'}`}/>
            <h1 className={`head-text ${headerExpanded? 'head-text-expanded':'head-text-contracted'}`}>Name it!</h1>
        </div>
    );
}

export default Header;