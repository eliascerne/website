import React, { useState } from 'react'
import { UilWebGrid, UilAngleRight, UilTimes, UilServer, UilCheckCircle } from '@iconscout/react-unicons'

function Services() {

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    function toggleShowModal1 () {
        setShowModal1(!showModal1);
    }

    function toggleShowModal2 () {
        setShowModal2(!showModal2);
    }

    function toggleShowModal3 () {
        setShowModal3(!showModal3);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What I offer</span>

            <div className="services_container container grid">
                {/* SERVICE 1 */}
                <div className="services_content">
                    <div>
                        <UilWebGrid className="services_icon" size="24" />
                        <h3 className="services_title">Ui/Ux <br /> Designer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services_button" onClick={toggleShowModal1}>
                        View More
                        <UilAngleRight className="button_icon" size="20" />
                    </span>

                    <div className={"services_modal " + (showModal1 ? 'active-modal' : undefined)}>
                    <div className="close_area" onClick={toggleShowModal1}></div>
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Ui/Ux <br /> Designer</h4>
                            <UilTimes className="services_modal-close" size="24" onClick={toggleShowModal1} />

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <UilCheckCircle className="services_modal-icon" />
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className="services_modal-service">
                                    <UilCheckCircle className="services_modal-icon" />
                                    <p>Web page development.</p>
                                </li>

                                <li className="services_modal-service">
                                    <UilCheckCircle className="services_modal-icon" />
                                    <p>I position your company brand.</p>
                                </li>

                                <li className="services_modal-service">
                                    <UilCheckCircle className="services_modal-icon" />
                                    <p>Fun to play with modern design.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* SERVICE 2 */}
                <div className="services_content">
                    <div>
                        <UilWebGrid className="services_icon" size="24" />
                        <h3 className="services_title">Frontend <br /> Developer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services_button" onClick={toggleShowModal2}>
                        View More
                        <UilAngleRight className="button_icon" size="20" />
                    </span>

                    <div className={"services_modal " + (showModal2 ? 'active-modal' : undefined)}>
                    <div className="close_area" onClick={toggleShowModal2}></div>
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Frontend <br /> Developer</h4>
                            <UilTimes className="services_modal-close" size="24" onClick={toggleShowModal2} />

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web page development.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Fun to play with modern design.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* SERVICE 3 */}
                <div className="services_content">
                    <div>
                        <UilServer className="services_icon" size="24" />
                        <h3 className="services_title">Backend <br /> Developer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services_button" onClick={toggleShowModal3}>
                        View More
                        <UilAngleRight className="button_icon" size="20" />
                    </span>

                    <div className={"services_modal " + (showModal3 ? 'active-modal' : undefined)}>
                    <div className="close_area" onClick={toggleShowModal3}></div>
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Backend <br /> Developer</h4>
                            <UilTimes className="services_modal-close" size="24" onClick={toggleShowModal3} />

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Web page development.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p>Fun to play with modern design.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
