import React from 'react'
import { useState } from "react";
import "./Contact.css"

const Contact = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
      };
      const HandleInput = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
      };
    
      return (
        <>
          <div className="Container-1">
            <div style={{position:"relative" , top:"0.4rem" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.757598290271!2d67.06136607336386!3d24.97436059176913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340e96baa7469%3A0xbf33b0c6a307d150!2sUnited%20Queen%20Foods!5e0!3m2!1sen!2s!4v1692805950434!5m2!1sen!2s"
                width="600"
                height="800"
                style={{ border: 0 , height:"79vh" , marginRight:"1rem",border:"2px solid black",borderRadius:"1.5rem"}}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="contact-form">
    
              <form onSubmit={HandleSubmit}>
                <div className="heading">
                  <h1>Contact Us</h1>
                </div>
                <div className="input-container focus">
                  <label className="label-style">Name</label>
                  <input
                    type="text"
                    onChange={HandleInput}
                    name="name"
                    placeholder="Enter Your Name"
                  />
                </div>
    
                <div className="input-container">
                  <label className="label-style">Email </label>
                  <input
                    type="email"
                    onChange={HandleInput}
                    name="email"
                    placeholder="Enter Your Email"
                  />
                </div>
    
                <div className="input-container">
                  <label className="label-style">Phone </label>
                  <input
                    type="tel"
                    onChange={HandleInput}
                    name="phone"
                    placeholder="111-222-444"
                  />
                </div>
    
                <div className="input-container textarea">
                  <label className="label-style">Message</label>
                  <textarea
                    onChange={HandleInput}
                    name="message"
                    placeholder="Type Here"
                    style={{overflow:"hidden"}}
                  />
                </div>
    
                <button className="btn-5" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </>
      );
      }
export default Contact