import React, { useState } from "react";
import "./ContactUsForm.css";
const url_main = "";

const ContactUsForm = ({ language }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [done, setDone] = useState("");

  const handleContact = (e) => {
    e.preventDefault();
    const blog = { name, phone, content: text, email };
    fetch(`${url_main}/sendContactMessage`, {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
        lang: "en",
      },
      body: JSON.stringify(blog),
    })
      .then((data) => data.json())
      .then((res) => {
        setDone(res.status);

        if (res.status === "success") {
          setName("");
          setText("");
          setPhone("");
          setEmail("");
        }
      });
  };

  return (
    <div className="contactUsForm">
      <form className="contact-validation-active">
        <div className="row">
          <div className="col col-lg-6 col-12">
            <div className="form-field">
              <input type="text" placeholder="Name" />
            </div>
          </div>
          <div className="col col-lg-6 col-12">
            <div className="form-field">
              <input type="tel" placeholder="Phone" />
            </div>
          </div>
          <div className="col col-lg-6 col-12">
            <div className="form-field">
              <input type="text" placeholder="Address" />
            </div>
          </div>
          <div className="col col-lg-6 col-12">
            <div className="form-field">
              <input type="email" placeholder="Email" />
            </div>
          </div>

          <div className="col col-lg-12 col-12">
            <textarea placeholder="Message"/>
          </div>
          <div className="submit-area">
            <button className="theme-btn">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
