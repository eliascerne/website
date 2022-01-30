import React, { useRef } from "react";
import { UilPhone, UilEnvelope, UilMessage } from "@iconscout/react-unicons";
import Data from "../Data.json";
import emailjs from "@emailjs/browser";

function Contact({ languageJSON }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "erias-awesome-gmail",
        "erias-awesome-email",
        form.current,
        "user_HlCQLxwv6qviZGhpxPks6"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">
        {Data.language[languageJSON].contactMe.heading}
      </h2>
      <span className="section_subtitle">
        {Data.language[languageJSON].contactMe.subheading}
      </span>

      <div className="contact_container container grid">
        <div>
          {/* Call me */}
          <div className="contact_information">
            <UilPhone className="contact_icon" size="32" />

            <div>
              <h3 className="contact_title">
                {Data.language[languageJSON].contactMe.phoneText}
              </h3>
              <span className="contact_subtitle">
                {Data.language[languageJSON].contactMe.phoneNumber}
              </span>
            </div>
          </div>
          {/* Mail me*/}
          <div className="contact_information">
            <UilEnvelope className="contact_icon" size="32" />

            <div>
              <h3 className="contact_title">
                {Data.language[languageJSON].contactMe.emailText}
              </h3>
              <span className="contact_subtitle">
                {Data.language[languageJSON].contactMe.emailAddress}
              </span>
            </div>
          </div>
        </div>
        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="contact_form grid">
          <div className="contact_inputs grid">
            <div className="contact_content" id="contact_name">
              <label for="" className="contact_label">
                {Data.language[languageJSON].contactMe.name}
              </label>
              <input type="text" className="contact_input" id="input_name" name="input_name" />
            </div>
            <div className="contact_content" id="contact_email">
              <label for="" className="contact_label">
                {Data.language[languageJSON].contactMe.email}
              </label>
              <input type="email" className="contact_input" id="input_email" name="input_email" />
            </div>
          </div>
          <div className="contact_content" id="contact_company">
            <label for="" className="contact_label">
              {Data.language[languageJSON].contactMe.company}
            </label>
            <input type="text" className="contact_input" id="input_company" name="input_company" />
          </div>
          <div className="contact_content" id="contact_message">
            <label for="" className="contact_label">
              {Data.language[languageJSON].contactMe.message}
            </label>
            <textarea
              name="input_message"
              id="input_message"
              cols="0"
              rows="4"
              className="contact_input"
            ></textarea>
          </div>

          <div className="contact_button_container">
            <button
              className="button button--flex form_button"
              id="contact_send_button"
              onclick="buttonPressed()"
            >
              {Data.language[languageJSON].contactMe.button}
              <UilMessage className="button_icon" size="20" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
