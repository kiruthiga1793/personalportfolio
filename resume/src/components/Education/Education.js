import React, { Component } from 'react';


export default class Header extends Component {
  render() {
     let resumeData=this.props.resumeData;
return(
        <section id="resume">

<div className="row education">

<div className="three columns header-col">
   <h1><span>Education</span></h1>
</div>
<div className="nine columns main-col">
              
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>Amity University,India</h3>
                          <p className="info">
                          Masters in Business Administration
                          <span>&bull;</span> <em className="date">Dec 2017</em></p>
                         
                       </div>
                    </div>

                    <div className="row item">
                       <div className="twelve columns">
                          <h3>Anna University,India</h3>
                          <p className="info">
                          Bachelors of Engineering
                          <span>&bull;</span> <em className="date">April 2015</em></p>
                         
                       </div>
                    </div>
                 
            </div>
         </div>

         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
             
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>DXC Technology</h3>
                          <p className="info">
                         Full Stack Developer
                          <span>&bull;</span> <em className="date">May 2016- Oct 2019</em></p>
                          <p>
                         Started my career with DXC TEchnology in May 2016.I was involved in complete end to end development of DXC's in house product. Here I got the chance to dig in and get experience with all the parts of the software.I have worked with our legacy JAVA-Spring backend, which is used to develop our business layer for all the products.Also, I have worked extensively with React,Bootstrap and Javascript. 
                          </p>
                       </div>

                    </div>

                  
            </div> 
         </div>


         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Certifications</span></h1>
            </div>

            <div className="nine columns main-col">
          
               
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>NIIT</h3>
                          <p className="info">
                          Web Component Development using J2EE
                          <span>&bull;</span> <em className="date">2014</em></p>
                          
                          <h3>FreeCodeCamp</h3>
                          <p className="info">
                          APIs and Microservices
                          <span>&bull;</span> <em className="date">2020</em></p>
                       

                       <h3>FreeCodeCamp</h3>
                          <p className="info">
                         Responsive Web Design
                          <span>&bull;</span> <em className="date">2020</em></p>
                     

                       <h3>FreeCodeCamp</h3>
                          <p className="info">
                         Javascript Algorithms and Data Structures
                          <span>&bull;</span> <em className="date">2020</em></p>
                       
                   </div>
                   </div>
                     </div>
                
         



                     <div className="row skill">

<div className="three columns header-col">
   <h1><span>Skills</span></h1>
</div>

<div className="nine columns main-col">

   <p>
   {resumeData.skillsDescription}
   </p>

   <div className="bars">

      <ul className="skills">
    {
      resumeData.skills && resumeData.skills.map((item) => {
        return(
          <li>
          <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
          </span><em>{item.skillname}</em>
          </li>
        )
      })
    }

      </ul>

   </div>

</div>

</div>
</div>
        </section>

);
  }
  }
