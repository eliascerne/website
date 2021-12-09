import React from 'react'
import { UilWebGrid, UilAngleRight, UilTimes, UilServer } from '@iconscout/react-unicons'

function Services() {

    const modalViews = document.querySelectorAll('.services_modal'),
        modalBtns = document.querySelectorAll('.services_button'),
        modalCloses = document.querySelectorAll('.services_modal-close')

    let modal = function (modalClick) {
        modalViews[modalClick].classList.add('active-modal')
    }

    modalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener('click', () => {
            modal(i)
        })
    })

    modalCloses.forEach((modalClose) => {
        modalClose.addEventListener('click', () => {
            modalViews.forEach((modalView) => {
                modalView.classList.remove('active-modal')
            })
        })
    })

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

                    <span className="button button--flex button--small button--link services_button">
                        View More
                        <UilAngleRight className="button_icon" size="20" />
                    </span>

                    <div className="services_modal">
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Ui/Ux <br /> Designer</h4>
                            <UilTimes className="services_modal-close" size="24" />

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

                {/* SERVICE 2 */}
                <div className="services_content">
                    <div>
                        <UilWebGrid className="services_icon" size="24" />
                        <h3 className="services_title">Frontend <br /> Developer</h3>
                    </div>

                    <span className="button button--flex button--small button--link services_button">
                        View More
                        <UilAngleRight className="button_icon" size="20" />
                    </span>

                    <div className="services_modal">
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Frontend <br /> Developer</h4>
                            <UilTimes className="services_modal-close" size="24" />

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

                    <span className="button button--flex button--small button--link services_button">
                        View More
                        <UilAngleRight className="button_icon" size="20" />
                    </span>

                    <div className="services_modal">
                        <div className="services_modal-content">
                            <h4 className="services_modal-title">Backend <br /> Developer</h4>
                            <UilTimes className="services_modal-close" size="24" />

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
