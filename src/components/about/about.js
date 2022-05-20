import React from 'react';
import './style.css';
import img1 from './imgs/2.webp';
import img2 from './imgs/3.webp';
import img3 from './imgs/4.webp';
import img4 from './imgs/5.webp';
import img5 from './imgs/6.webp';
import img6 from './imgs/7.webp';
import img7 from './imgs/8.webp';
import img8 from './imgs/9.png';
function About() {
           return(
        <div className={'about-block'}>
         <h1>Our  <span> Features </span></h1>
        <p>
            This very extraordinary feature,
            can make learning activities more
            efficient
        </p>
      <div className="features-block">
      <div className="icons">
        <div className={'red'}> </div>
        <div className={'yellow'}> </div>
        <div className={'green'}> </div>
      </div>
          <div className="hand">
           <span>
            <i className="bi bi-hand-index-thumb"> </i>
           </span>
          </div>
        <div className="one-img">
            <div className="title">
                <i className="bi bi-bar-chart-fill"> </i>
                <button>
                    Instructor
                </button>
                Eveny Howard
            </div>
            <img src={img1} alt="img1"/>
            <button className={'blue-btn'}>
                Present
            </button>
            <button className={'pink-btn'}>
                <i className="bi bi-telephone-fill"> </i>
                Call
            </button>
        </div>
          <div className="two-img">
              <div className="title">
                  <i className="bi bi-bar-chart-fill"> </i>
                  Tamara Clarke
              </div>
              <div className="title-2">
                  <i className="bi bi-bar-chart-fill"> </i>
                  Humbert Holland
              </div>
              <img src={img2} alt="img2"/>
              <img src={img3} alt="img3"/>
          </div>
          <div className="three-img">
              <div className="title">
                  <i className="bi bi-bar-chart-fill"> </i>
                  Adam Levin
              </div>
              <div className="title-3">
                  <i className="bi bi-bar-chart-fill"> </i>
                  Patricia Mendoza
              </div>
              <img src={img4} alt="img4"/>
              <img src={img5} alt="img5"/>
          </div>
      </div>
      <div className="classroom">
        <h2>
            A <span> user interface </span>  designed for the classroom
        </h2>
          <div className="item">
           <div className="icon">
            <span> </span>
            <span> </span>
            <span> </span>
            <span className={'yellow'}> </span>
           </div>
              <p>
                  Teachers don’t get lost in
                  the grid view and have a
                  dedicated Podium space.
              </p>
          </div>
          <div className="item">
              <div className="icon-2">
                  <span> </span>
                  <span className={'yellow'}> </span>
              </div>
              <p>
                  TA’s and presenters can be
                  moved to the front of the class.
              </p>
          </div>
          <div className="item">
              <div className="icon-3">
                  <i className="bi bi-person-fill"> </i>
              </div>
              <p>
                  Teachers can easily see all
                  students and class data at one time.
              </p>
          </div>
      </div>
       <div className="tools-block">
        <div className="tools-text">
           <h1>
                <span> Tools </span>
            For Teachers And Learners
           </h1>
            <p>
                Class has a dynamic set of teaching
                tools built to be deployed and used
                during class. Teachers can handout
                assignments in real-time for students
                to complete and submit.
            </p>
        </div>
           <img src={img6} alt="img6"/>
       </div>
        <div className="assessment-block">
            <img src={img7} alt="img7"/>
            <div className="assessment-text">
            <h1> Assessments, <span>  Quizzes </span> , Tests </h1>
            <p>
                Easily launch live assignments,
                quizzes, and tests. Student results
                are automatically entered in
                the online gradebook.
            </p>
            </div>
        </div>
       <div className="management-block">
         <div className="management-text">
          <h1> <span> Class Management </span>
              Tools for Educators
          </h1>
           <p>
               Class provides tools to help
               run and manage the class such
               as Class Roster, Attendance,
               and more. With the Gradebook,
               teachers can review and grade
               tests and quizzes in real-time.
           </p>
         </div>
         <div className="management-users-block">
             <div className="star">
               <span>
                <i className="bi bi-star-fill"> </i>
               </span>
             </div>
             <div className="book">
               <span>
              <i className="bi bi-book-fill"> </i>
               </span>
             </div>
          <div className="header">
           <h4>GradeBook</h4>
          </div>
        <div className="sky-color">
            <img src={img3} alt="img3"/>
            <i className="bi bi-star-fill"> </i>
        </div>
        <div className="blue-color">
            <img src={img4} alt=""/>
        </div>
        <div className="green-color">
            <img src={img2} alt="img2"/>
        </div>
        <div className="red-color">
            <img src={img5} alt="img5"/>
        </div>
      <button className={'btn-export'}> Export </button>
             <img className={'img-one'} src={img8} alt="img8"/>
             <img className={'img-two'} src={img8} alt="img8"/>
             <img className={'img-three'} src={img8} alt="img8"/>
         </div>
       </div>
        <div className="discussions-block">
        <div className="img-block">
        <div className="user-block">
         <div className="person-icon">
         <div className="span">
             <i className="bi bi-person-fill"> </i>
         </div>
         </div>
            <div className="icons">
                <div className={'red'}> </div>
                <div className={'yellow'}> </div>
                <div className={'green'}> </div>
            </div>
           <div className="user-img-block-1">
               <img src={img1} alt="img1"/>
               <h5>Private Discussion </h5>
               <p> Your video can’t be
                   seen by others </p>
           </div>
            <div className="user-img-block-2">
                <div className="title-3">
                    <i className="bi bi-bar-chart-fill"> </i>
                    Patricia Mendoza
                </div>
                <img src={img5} alt="img1"/>
                <button> End Discussion </button>
            </div>
        </div>
        </div>
     <div className="discussions-text">
      <h1> One-on-One <span> Discussions </span> </h1>
         <p>
             Teachers and teacher assistants
             can talk with students privately
             without leaving the Zoom environment.
         </p>
     </div>
        </div>
         <button className={' features-btn'}>
             See more features
         </button>
        </div>
    )

}

export default About