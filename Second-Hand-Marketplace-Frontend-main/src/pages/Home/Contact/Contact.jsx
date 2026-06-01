import React from "react";
import location from "../../../assets/icons/location.png";
import phone from "../../../assets/icons/phone.png";
import email from "../../../assets/icons/email.png";

const Contact = ({title,title2}) => {
  return (
    <div className="bg-base-300 p-5 md:p-30 md:pt-10 ">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
         {title} <span className="text-primary">{title2}</span>
        </h1>
        <p>We're here to help you start your wellness journey.</p>
      </div>

      <div className="md:flex gap-5 justify-between pt-8">
        <div className="bg-white  md:w-1/2 rounded-lg p-4">
          <h5 className="text-xl font-semibold mb-8">Send Message</h5>
          <form action="">
            <input
              type="text"
              placeholder="Name"
              className="input w-full rounded-xl mb-4 border-black"
            />
            <input
              type="text"
              placeholder="Email"
              className="input w-full rounded-xl mb-4 border-black"
            />
            <input
              type="text"
              placeholder="Phone"
              className="input w-full rounded-xl mb-4 border-black"
            />
            <textarea
              type="text"
              rows="6"
              placeholder="Message"
              className="textarea w-full rounded-xl mb-4 border-black"
            />
            <button className="btn btn-primary rounded-full w-full mt-3">
              Send Now
            </button>
          </form>
        </div>
        <div className="bg-white md:w-1/2 rounded-lg p-4">
          <h5 className="text-xl font-semibold">Contact Information</h5>
          
          <div className="flex items-start my-8">
            <img className="mt-2" src={location} alt="location" />
            <div className="ms-3">
              <h6 className="mb-4">Our Location</h6>
              <p>123 Wellness Avenue, Suite 200 Dubai, UAE</p>
            </div>
          </div>
          <div className="flex items-start my-8">
            <img className="mt-2" src={phone} alt="location" />
            <div className="ms-3">
              <h6 className="mb-4">Phone</h6>
              <p>(555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start my-8">
            <img className="mt-2" src={email} alt="location" />
            <div className="ms-3">
              <h6 className="mb-4">Phone</h6>
              <p>info@relive-clinic.com</p>
            </div>
          </div>

          <div>
             <h5 className="text-lg font-semibold">Business Hours</h5>
             <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
             <p>Saturday: 10:00 AM - 4:00 PM</p>
             <p>Sunday: Closed</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
