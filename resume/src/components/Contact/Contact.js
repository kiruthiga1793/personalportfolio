import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
   
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                https://www.linkedin.com/in/kiruthiga-prabakaran-16a21769/ 
                </h4>
                <h4>Email
                 pkiruthiga93@gmail.com 
                </h4>
                <h4>Phone
                  +1 4372446880
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}