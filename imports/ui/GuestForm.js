import React, { useState } from 'react';

const GuestForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    message: '',
  });

  return (
    <form className="post_form" method="POST">
      <fieldset>
        <h2>Leave a message!</h2>
        <input type="text" name="name" id="name" placeholder="Your name!" />
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </fieldset>
    </form>
  );
};

export default GuestForm;
