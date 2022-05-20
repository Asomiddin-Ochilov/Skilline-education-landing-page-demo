import React from 'react';

import './style.css';

import img1 from './img/1.webp';
import img2 from './img/2.webp';
import img3 from './img/3.webp';
import img4 from './img/4.webp';
import img5 from './img/5.webp';

function Education() {

    return(
        <div className={'edu-block'}>
          <div className="platform-img">
              <img src={img1} alt="img1"/>
              <img src={img2} alt="img2"/>
              <img src={img3} alt="img3"/>
              <img src={img4} alt="img4"/>
          </div>
          <div className="edu-text">
          <h5> INTEGRATIONS </h5>
              <h1>
                  200+ educational
                  tools and platform <span>
                   integrations
                  </span>
              </h1>
              <p>
                  Schoology has every tool your
                  classroom needs and comes
                  pre-integrated with more than 200+
                  tools, student information systems
                  (SIS), and education platforms.
              </p>

              <button className={'features-btn'}>
                  See All Integrations
              </button>
          </div>
            <div className="edu-text-2">
                <h5> TESTIMONIAL </h5>
                <h1>
                    What They Say?

                </h1>
                <p>
                    Skilline has got more than
                    100k positive ratings
                    from our users around
                    the world.
                </p>
              <p>
                  Some of the students and
                  teachers were greatly
                  helped by the Skilline.
              </p>
               <p>
                   Are you too? Please
                   give your assessment
               </p>
                <button className={'features-btn-2'}>
                    Write your assessment
                <span>
                 <i className="bi bi-arrow-right"> </i>
                </span>
                </button>
            </div>
            <div className="edu-person">
                <img src={img5} alt="img5"/>
                <div className="edu-message">
                  <p>
                      "Thank you so much for your help.
                      It's exactly what I've been looking for.
                      You won't regret it. It really saves
                      me time and effort. Skilline is
                      exactly what our business has
                      been lacking."
                  </p>
                   <p className={'footer-p'}>
                     <span>Gloria Rose</span>
                      <span className={''}>
                          <span className={'star'}>
                         <i className="bi bi-star-fill"> </i>
                         <i className="bi bi-star-fill"> </i>
                         <i className="bi bi-star-fill"> </i>
                         <i className="bi bi-star-fill"> </i>
                         <i className="bi bi-star-fill"> </i>
                          </span>
                          <br/>
                          <span> 12 reviews at Yelp </span>
                      </span>
                   </p>
                </div>
            </div>
        </div>
    )

}

export default Education