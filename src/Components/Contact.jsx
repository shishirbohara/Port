import React from "react";
import "./Contact.css";
import mail_icon from "../assets/mail_icon.svg";
import phone_icon from "../assets/phone_icon.svg";
import location_icon from "../assets/location_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6c80acae-e1eb-4359-9dd7-3a9df62553c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Email sent successfully");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's Connect</h1>
            <p>
              I am always eager to connect with like-minded individuals and
              explore new opportunities. Feel free to reach out to me anytime.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" />
                <p>shishirbohara68@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={phone_icon} alt="" />
                <p>+977-9840484991</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>Harisiddhi,Lalitpur</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
            <label>Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
            <label>Write your messsage</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Contact;
