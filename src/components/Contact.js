import React from 'react'
import { UilPhone, UilEnvelope, UilMessage } from '@iconscout/react-unicons'

function Contact() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Contact Me</h2>
            <span className="section_subtitle">Get in touch</span>

            <div className="contact_container container grid">
                <div>
                    {/* Call me */}
                    <div className="contact_information">
                        <UilPhone className="contact_icon" size="32" />

                        <div>
                            <h3 className="contact_title">Call Me</h3>
                            <span className="contact_subtitle">0676 4903757</span>
                        </div>
                    </div>
                    {/* Mail me*/}
                    <div className="contact_information">
                        <UilEnvelope className="contact_icon" size="32" />

                        <div>
                            <h3 className="contact_title">Mail me</h3>
                            <span className="contact_subtitle">elias.cerne@icloud.com</span>
                        </div>
                    </div>
                </div>
                {/* Form */}
                <form action="" className="contact_form grid">
                    <div className="contact_inputs grid">
                        <div className="contact_content" id="contact_name">
                            <label for="" className="contact_label">Name</label>
                            <input type="text" className="contact_input" id="input_name" />
                        </div>
                        <div className="contact_content" id="contact_email">
                            <label for="" className="contact_label">Email</label>
                            <input type="email" className="contact_input" id="input_email" />
                        </div>
                    </div>
                    <div className="contact_content" id="contact_company">
                        <label for="" className="contact_label">Company</label>
                        <input type="text" className="contact_input" id="input_company" />
                    </div>
                    <div className="contact_content" id="contact_message">
                        <label for="" className="contact_label">Message</label>
                        <textarea name="" id="input_message" cols="0" rows="4" className="contact_input"></textarea>
                    </div>

                    <div className="contact_button_container">
                        <a className="button button--flex" id="contact_send_button" onclick="buttonPressed()">
                            Send Message
                            <UilMessage className="button_icon" size="20" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
