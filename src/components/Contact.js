import React from 'react'
import { UilPhone, UilEnvelope, UilMessage } from '@iconscout/react-unicons'
import Data from '../Data.json'

function Contact({ languageJSON }) {
    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">{Data.language[languageJSON].contactMe.heading}</h2>
            <span className="section_subtitle">{Data.language[languageJSON].contactMe.subheading}</span>

            <div className="contact_container container grid">
                <div>
                    {/* Call me */}
                    <div className="contact_information">
                        <UilPhone className="contact_icon" size="32" />

                        <div>
                            <h3 className="contact_title">{Data.language[languageJSON].contactMe.phoneText}</h3>
                            <span className="contact_subtitle">{Data.language[languageJSON].contactMe.phoneNumber}</span>
                        </div>
                    </div>
                    {/* Mail me*/}
                    <div className="contact_information">
                        <UilEnvelope className="contact_icon" size="32" />

                        <div>
                            <h3 className="contact_title">{Data.language[languageJSON].contactMe.emailText}</h3>
                            <span className="contact_subtitle">{Data.language[languageJSON].contactMe.emailAddress}</span>
                        </div>
                    </div>
                </div>
                {/* Form */}
                <form action="" className="contact_form grid">
                    <div className="contact_inputs grid">
                        <div className="contact_content" id="contact_name">
                            <label for="" className="contact_label">{Data.language[languageJSON].contactMe.name}</label>
                            <input type="text" className="contact_input" id="input_name" />
                        </div>
                        <div className="contact_content" id="contact_email">
                            <label for="" className="contact_label">{Data.language[languageJSON].contactMe.email}</label>
                            <input type="email" className="contact_input" id="input_email" />
                        </div>
                    </div>
                    <div className="contact_content" id="contact_company">
                        <label for="" className="contact_label">{Data.language[languageJSON].contactMe.company}</label>
                        <input type="text" className="contact_input" id="input_company" />
                    </div>
                    <div className="contact_content" id="contact_message">
                        <label for="" className="contact_label">{Data.language[languageJSON].contactMe.message}</label>
                        <textarea name="" id="input_message" cols="0" rows="4" className="contact_input"></textarea>
                    </div>

                    <div className="contact_button_container">
                        <a className="button button--flex" id="contact_send_button" onclick="buttonPressed()">
                        {Data.language[languageJSON].contactMe.button}
                            <UilMessage className="button_icon" size="20" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
