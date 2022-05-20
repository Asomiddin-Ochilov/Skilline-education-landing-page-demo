import React from 'react';
import './style.css';
import girl from './imgs/girl.webp';
import user from './imgs/user.jpg';
function HeaderComponent(){
    return(
        <div className={'header'}>
                                            {/*    Navbar*/}
         <div className="navbar">
         <div className="logo">
           <a href="#">Skilline</a>
         </div>
          <div className="nav-link">
              <a href="#home">Home</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">About Us</a>
              <button>
              Login
              </button>
              <button className={'SingUp'}>
                  Sing Up
              </button>
          </div>
         </div>
          <div className="body"> </div>
                                         {/*    header-footer  */}
         <div className="footer">
             <div className="item-1">
                 <h1>
                     <span>Studying</span> Online is now much easier</h1>
                 <p>
                     Skilline is an interesting platform
                     that will teach you in more an
                     interactive way
                 </p>
                 <div className="item-footer">
                     <button>
                         Join for free
                     </button>
                    <button className={'play'}>
                        <i className="bi bi-play-fill"> </i>
                    </button>
                     <p>Watch how it works</p>
                 </div>
             </div>
             <div className="item-2">
                 <div className="calendar">
                  <span className={'icon'}>
                    <i className="bi bi-calendar4-week"> </i>
                  </span>
                   <p>
                       <span>
                     250k
                       </span>
                       <br/>
                    <span>
                    Assisted Student
                    </span>
                   </p>
                 </div>
                 <div className="message">
                 <span className={'icon'}>
               <i className="bi bi-envelope-fill"> </i>
                  </span>
                     <p>
                       <span>
                    Congratulations
                       </span>
                         <br/>
                         <span>
                  Your admission completed
                    </span>
                     </p>
                     <div className="check">
                         <i className="bi bi-check-lg"> </i>
                     </div>

                 </div>
                 <div className="user">

                     <span className={'icon'}>
                   <img src={user} alt="user"/>
                  </span>
                     <p>
                       <span>
                   User Experience Class
                       </span>
                         <br/>
                         <span>
                Today at 12.00 PM
                    </span>
                     </p>
                     <button> Join Now </button>
                 </div>
                 <div className="mini-icon">
                     <i className="bi bi-kanban"> </i>
                 </div>
                 <img src={girl} alt="img"/>

             </div>
         </div>
        </div>
    )
}
export default HeaderComponent