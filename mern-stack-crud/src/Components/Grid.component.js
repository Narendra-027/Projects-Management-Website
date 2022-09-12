import React from 'react';
import './grid.css'; 
import pic from './img.jpg';
import p from './images.jpg';
import a from './images/ai.jpg';
import b from './images/me.jpg';
import c from './images/ee.jpg';
import d from './images/bb.jpg';
import e from './images/ci.jpg';
import f from './images/ch.jpg';
import g from './images/cs.jpg';
import i from './images/mt.jpg';
import j from './images/q.jpg';
import SocialFollow from './SocialFollow.component';
import { BrowserRouter as Router, Switch,
	Route, Link } from "react-router-dom";
export default function Grid() {
  return (
    <>
    <div className='slide'>
      
      <center>
      <div className='imgBx'>
        <img src={j}/>
      </div></center><br/>
      <div className='content'>
      <div className='bg'>
        <h1><b>Design Credit Course</b></h1>
        <p>The aim of this course is to inculcate the design thinking among the students and facilitate gaining design immersion experience. Student has to earn 6 credits from the various categories decided in the quidelines. It gives an opportunity to be the part of various projects being going on. Also enhances the critical thinking and indroduces to problem solving strategies.</p><br/>

        <h2><b><u>General Guidelines</u></b></h2>
        <p>A student have to complete 6 design credits to meet the degree requirements.</p>
        <p>Starting from the second academic year of the b.tech curriculum a student must complete 2 design credits every year.</p>
        <p>Design credit may continue post summer vacation during the semester and also for the entire academic year, for this the student will be awarded X grade and will be required to register for the same course in the immediate semester.</p><br/>

        <h2><b><u>Process of earning design credits</u></b></h2>
        <p>To earn design credit, the student have to register under the following categories:</p>
        <ol>
          <li>Co-curricular projects such as Robocon, SAE-mini-Baja, etc., as a part of the Board of Co curricular activities of ACAC.</li>
          <li>Internships with Academia/ Industry/ R&D organisations.</li>
          <li>Summer/Winter/Semester projects with Institute faculty within or outside the department</li>
          <li>Summer Research Projects with faculty members within or outside the department</li>
          <li>Specialised Elective Courses related to Design and Practical Experience</li>
          <li>Regular Courses with optional Design and Practical Experience Component</li>
        </ol><br/>

        <h2><b><u>Evaluation Criterion</u></b></h2>
        <p>Department will form a committee consisting of all batch-wise coordinators of Design andPractical Experience. The Head of the Department will chair the committee.<br/>The committee will follow the following guideline for credit assignment:</p>
        <ul>
          <li> For Category. 1, the committee will decide satisfactory/unsatisfactory/continuation grades based on the presentation in consultation with the president Board of Co-curricular activities of ACAC.</li>
          <li>For Categories 2-4, the committee will decide satisfactory/unsatisfactory/continuation grades based on the presentation in consultation with the research/project/internship advisor.</li>
          <li>For Categories. 5-6, the committee will decide satisfactory/unsatisfactory/continuation grades based on the presentation in consultation with the course instructor.</li>
          Department may conduct evaluations twice in May and November.
        </ul><br/><br/></div>
        



        <h1><b><center>Branches</center></b></h1>
      </div>
    </div>
    
    
    <div className='container'>

    <div className='card'>

      
      <div className='imgBx'>
        <img src={a}/>
      </div>
    <div className='content'>
      <h2><b><Link to={"/ai"}
					className="nav-link">
				Artificial Intelligence And Data Science
				</Link></b></h2>      
      </div>
      </div>
      <div className='card'>

      
      <div className='imgBx'>
        <img src={d}/>
      </div>
    <div className='content'>
      <h2><b><Link to={"/bb"}
					className="nav-link">
				Bio Engineering
				</Link></b></h2>      
      </div>
      </div>
      <div className='card'>

      
      <div className='imgBx'>
        <img src={f}/>
      </div>
    <div className='content'>
      <h2><b><Link to={"/ch"}
					className="nav-link">
					Chemical Engineering
				</Link></b></h2>      
      </div>
      </div>
      <div className='card'>

      
      <div className='imgBx'>
        <img src={e}/>
      </div>
    <div className='content'>
      <h2><b><Link to={"/ci"}
					className="nav-link">
				Civil And Infrastructure Engineering
				</Link></b></h2>      
      </div>
      </div>
      <div className='card'>

      
      <div className='imgBx'>
        <img src={g}/>
      </div>
    <div className='content'>
      <h2><b><Link to={"/cs"}
					className="nav-link">
				Computer Science & Engineering
				</Link></b></h2>      
      </div>
      </div>
      <div className='card'>

      
      <div className='imgBx'>
        <img src={c}/>
      </div>
    <div className='content'>
      <h2><b><Link to={"/ee"}
					className="nav-link">
				Electrical Engineering
				</Link></b></h2>      
      </div>
      </div>
      <div className='card'>

      
      <div className='imgBx'>
        <img src={i}/>
      </div>
    <div className='content'>
      <h2><b><Link to={"/mt"}
					className="nav-link">
				Materials Engineering
				</Link></b></h2>      
      </div>
      </div>
      <div className='card'>

      
      <div className='imgBx'>
        <img src={b}/>
      </div>
    <div className='content'>
      <h2><b><Link to={"/me"}
					className="nav-link">
				Mechanical Engineering
				</Link></b></h2>      
      </div>
      </div>
     
    </div>


    
   
    
    
    
    
    
  </>
    
 
    );
}