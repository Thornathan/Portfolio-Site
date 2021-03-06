import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from "axios";
import "./Contact.css";

export default class Contact extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state
    // eslint-disable-next-line no-unused-vars
    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })

    axios({
      method: "POST",
      url: "http://localhost:3001/api/form",
      data: {
        name: name,
        email: email,
        messsage: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Message Sent");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm(){
    document.getElementById('contact-form').reset();
}

  render() {
    return (
      <div>
        <h3>Lets Get In Touch</h3>
      <Form id="contact-form" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="name" className="label">Name</Label>
          <Input type="text" name="name" className="input-field" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="email" className="label">Email</Label>
          <Input type="email" name="email" className="input-field" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="message" className="label">Message</Label>
          <Input type="textarea" name="message" className="input-field" onChange={this.handleChange} />
        </FormGroup>
        <Button id="submit-btn">Submit</Button>
      </Form>
      </div>
    );
  }
}
