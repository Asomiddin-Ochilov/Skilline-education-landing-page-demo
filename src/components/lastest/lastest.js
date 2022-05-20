import  React from 'react';
import './style.css';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

function Last() {

   return(
       <div className={'last-page'}>
        <h1>  Lastest News and Resources </h1>

           <p> See the developments that
               have occurred to Skillines
               in the world
           </p>
          <div className="last-block">
            <div className="item-3">
                <img src={img1} alt="img1"/>
                <div className="badge">
                    NEWS
                </div>
                <h4> Class adds $30 million to its
                    balance sheet for a Zoom-friendly
                    edtech solution
                </h4>
                <p>
                    Class, launched less than a year 
                    ago by Blackboard co-founder Michael
                    Chasen, integrates exclusively...      
                </p>
                <a href="#"> Read more </a>
            </div>
            <div className="item-4">
            <div className="box">
                <div className="badge-footer-1">
                    PRESS RELEASE
                </div>
                <img src={img2} alt="img2"/>
                <div style={{width:'65%'}}>
                <h4>
                    Class Technologies Inc.
                    Closes $30 Million Series A
                    Financing to Meet High Demand
                </h4>
                    <p>
                        Class Technologies Inc.,
                        the company that created Class,...
                    </p>
                </div>
            </div>
            <div className="box">
                <div className="badge-footer">
                    NEWS
                </div>
                    <img src={img3} alt="img3"/>
                    <div style={{width:'65%'}}>
                        <h4>
                            Zoom’s earliest investors are
                            betting millions on a better
                            Zoom for schools
                        </h4>
                        <p>
                            Zoom was never created to
                            be a consumer product.
                            Nonetheless, the...
                        </p>
                    </div>
                </div>
               <div className="box">
                    <div className="badge-footer">
                        NEWS
                    </div>
                    <img src={img4} alt="img4"/>
                    <div style={{width:'65%'}}>
                        <h4>
                            Former Blackboard CEO Raises
                            $16M to Bring LMS Features
                            to Zoom Classrooms
                        </h4>
                        <p>
                            This year, investors
                            have reaped big
                            financial returns from
                            betting on Zoom...
                        </p>
                    </div>
                </div>
            </div>
          </div>
       </div>
   )
    

}
export default Last