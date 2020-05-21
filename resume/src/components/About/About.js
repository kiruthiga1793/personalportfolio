import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>I am Kiruthiga Prabakaran,a Full Stack Developer, currently living in Canada.I am a self driven and self motivated person.</p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>pkiruthiga93@gmail.com</span>
                     <br></br>
       						   <span>
                     +4372446880
                    </span>
                    <br></br>
                    
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}