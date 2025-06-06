import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6rchv3c', 'template_aj6f1x5', form.current, {
        publicKey: 'tRp_Z6LJHXc3t7VxT',
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
    <form 
      ref={form} 
      onSubmit={sendEmail} 
      className="max-w-lg px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md"
    >
      <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
      <input 
        type="text" 
        name="user_name" 
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
      />

      <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
      <input 
        type="email" 
        name="user_email" 
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
      />

      <label className="block mb-2 text-sm font-bold text-gray-700">Subject</label>
      <textarea 
        name="subject" 
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      />

      <label className="block mb-2 text-sm font-bold text-gray-700">Message</label>
      <textarea 
        name="message" 
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      />

      <input 
        type="submit" 
        value="Send" 
        className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      />
    </form>
  );
};
