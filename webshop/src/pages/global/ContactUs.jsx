import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Rating from '@mui/material/Rating';

function ContactUs() {
  const [value, setValue] = useState(2);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fs97a5a', 'template_toxf94a', form.current, {
        publicKey: 'IMPC3mEuYnz5qPS9V',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
       <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>Email</label> <br /> <br />
      <input type="email" name="from_email" /><br />
      <label>Message</label> <br />
      <textarea name="message" /> <br />
      <Rating
        name="rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> 

      <input type="submit" value="Send" />
    </form>
    </div>
  )
}

export default ContactUs