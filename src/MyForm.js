import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.name = '';
    this.email = '';
    this.message = '';
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // You can access the form data directly from class properties.
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    // You can now use formData for further processing.
    console.log('Form data submitted:', formData);
  };

  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={this.message}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;