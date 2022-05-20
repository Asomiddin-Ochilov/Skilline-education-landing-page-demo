import React from  'react';
import './style.css';
import netflix from './img-componies/netfilix.png';
import airbnb from './img-componies/airbnb.png';
import facebook from './img-componies/facebook.png';
import amazon from './img-componies/amazon-full.png';
import grab from './img-componies/grab.png';
function Careers() {
    return(
        <div className={'careers'}>
        <h3>
            Trusted by 5,000+ Companies Worldwide
        </h3>
        <div className="companies">
        <h1>Google</h1>
            <img src={netflix} alt="netflix"/>
            <img src={airbnb} alt="airbnb"/>
            <img className={'amazon'} src={amazon} alt="amazon"/>
            <img src={facebook} alt="facebook"/>
            <img src={grab} alt="grab"/>
        </div>
         <div className="main">
          <div className="block-main">
          <h1>All-In-One <span>Cloud Software</span></h1>
           <p>
               Skilline is one powerful online software
               suite that combines all the tools needed
               to run a successful school or office.
           </p>
          </div>
             <div className="card-group">

             <div className="card">
               <div className="card-header">
                   <i className="bi bi-file-earmark-text"> </i>
               </div>
                 <div className="card-body">
                 <h4>Online Billing,
                     <br/>
                     Invoicing, & Contracts</h4>
                 </div>
                 <div className="card-footer">
                   <p>
                       Simple and secure control of your
                       organization’s financial and legal
                       transactions. Send customized
                       invoices and contracts
                   </p>
                 </div>
             </div>
             <div className="card">
                     <div className="card-header h-2">
                         <i className="bi bi-calendar4-week"> </i>
                     </div>
                     <div className="card-body">
                         <h4>Easy Scheduling &  <br/>
                             Attendance Tracking</h4>
                     </div>
                     <div className="card-footer">
                         <p>
                             Schedule and reserve classrooms
                             at one campus or multiple campuses.
                             Keep detailed records of student
                             attendance
                         </p>
                     </div>
                 </div>
            <div className="card">
                     <div className="card-header h-3">
                         <i className="bi bi-people"> </i>
                     </div>
                     <div className="card-body">
                         <h4> <br/> Customer Tracking </h4>
                     </div>
                     <div className="card-footer">
                         <p>
                             Automate and track emails to
                             individuals or groups. Skilline’s
                             built-in system helps organize
                             your organization
                         </p>
                     </div>
                 </div>
             </div>

         </div>
        </div>
    )

}
export default Careers