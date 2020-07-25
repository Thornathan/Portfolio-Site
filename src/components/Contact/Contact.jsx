import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h3>Get In Touch</h3>
        <form id="contact-form">
          <label>Name</label>
          <input type="text" className="input-field" name="name"/>
          <label>Subject</label>
          <input type="text" className="input-field" name="subject"/>
          <label>Email</label>
          <input type="text" className="input-field" name="email"/>
          <label>Message</label>
          <textarea type="text" className="input-field" name="message"/>
          <input id="submit-btn" type="submit" value="Send"></input>
        </form>
      </div>
    )
  }
}
