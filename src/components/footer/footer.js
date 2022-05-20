import  React from 'react';

import './style.css';

function Footer() {

    return(
        <div className={'footer-block'}>
        <div className="block-header">
            <div className="logo">
                <a href="#">Skilline</a>
            </div>
            <span className={'line'}> </span>
            <h3> Virtual Class for Zoom </h3>
        </div>
         <div className="block-body">
           <h3> Subscribe to get our Newsletter </h3>
             <input type="text" placeholder={'Your Email'}/>
             <button> Subscribe  </button>
         </div>
            <div className="block-footer">
                <a href="#"> Careers </a>
                <span className={'lines'}> </span>
                <a href="#"> Privacy Policy </a>
                <span className={'lines'}> </span>
                <a href="#"> Terms & Conditions </a>
                <p> © 2021 Class Technologies Inc. </p>
            </div>
        </div>
    )

}

export default Footer