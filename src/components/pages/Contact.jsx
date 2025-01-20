import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded-lg"
        />
        <textarea
          placeholder="Message"
          className="p-2 border rounded-lg h-32"
        ></textarea>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
