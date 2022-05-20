import React from 'react';
import './style.css';
function SkillPage() {
    return(
        <div className={'wrapper'}>
        <h1> What is <span> Skilline? </span> </h1>
         <p className={'p-text'}>
             Skilline is a platform that
             allows educators to create online
             classes whereby they can store the
             course materials online; manage
             assignments, quizzes and exams;
             monitor due dates; grade results
             and provide students with feedback
             all in one place.
         </p>
            <div className="box-group">
                <div className="box-1">
                    <h3> FOR INSTRUCTORS</h3>
                    <button> Start a class today</button>
                </div>
                <div className="box-2">
                    <h3>FOR STUDENTS</h3>
                    <button>Enter access code</button>
                </div>
            </div>
            <div className="box-3">
                <h3>
                    Everything you can do in a physical
                    classroom,
                    <span> you can do with Skilline </span>
                </h3>
                <p>
                    Skilline’s school management software
                    helps traditional and online schools manage
                    scheduling, attendance, payments and virtual
                    classrooms all in one secure cloud-based system.
                </p>
                <a href="#">
                    Learn more
                </a>
            </div>
            <div className="box-4">
                <button>
                    <i className="bi bi-play-fill"> </i>
                </button>
            </div>
        </div>
    )

}

export default SkillPage