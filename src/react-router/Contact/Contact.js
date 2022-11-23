import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <>
            <div className='form_container'>
                <section className="section_container" >
                    <h2 className="header_content">Contact us</h2>

                    <p className="para_content">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>

                    <div className="row" >
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div className="name_input">
                                    <label htmlFor="name" className="">Your name:- </label>
                                    <input type="text" id="name" name="name" className="form-control" />
                                </div>

                                <div className="name_input">
                                    <label htmlFor="email" className="">Your email:- </label>
                                    <input type="text" id="email" name="email" className="form-control" />
                                </div>

                                <div className="name_input">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <label htmlFor="message">Your message:- </label>
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        </div>

                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-md-left">
                                <button>Send</button>
                            </div>
                            <div className="status"></div>
                        </div>

                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0" style={{ display: "inline-block" }}>
                                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                    <p>C-610</p>
                                </li>

                                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+91 635493993</p>
                                </li>

                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@gmail.com.com</p>
                                </li>
                            </ul>
                        </div>


                    </div>

                </section>
            </div>
        </>
    )
}

export default Contact