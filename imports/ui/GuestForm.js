import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

const GuestForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    message: '',
  });

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  function clearForm() {
    setInputs({
      name: '',
      message: '',
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    Meteor.call('posts.add', inputs);
    clearForm();
  }

  return (
    <form className="post_form" method="POST" onSubmit={handleSubmit}>
      <fieldset>
        <h2>Leave a message!</h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name!"
          value={inputs.name}
          onChange={handleChange}
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={inputs.message}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Post" />
      </fieldset>
    </form>
  );
};

export default GuestForm;
