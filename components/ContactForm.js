import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';
import emailjs from 'emailjs-com';
const recaptchaRef = React.createRef();



export default function ContactForm() {

    const [ success, setSuccess ] = useState(false);
    const [ fail, setFail ] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_83upfed', 'template_tmmicr4', e.target, 'user_KercxwWPwPKV53JpOtz81').then((result) => {
            setSuccess(true)
            handleSuccessMessage()
        }, (error) => {
            setFail(true)
            handleFailMessage()
        });
    }

    function handleSuccessMessage() {
        if(success === true){
            const message = document.querySelector(".successMessage")
            const form = document.querySelector(".contact-form")
            message.classList.add('show')
            form.classList.add('hide')
        }
        else {
            return;
        }
    }

    function handleFailMessage() {
        if(fail === true){
            const message = document.queryCommandValue(".failMessage")
            message.classList.add('show')
        }
        else {
            return;
        }
    }

    const onSubmit = () => {
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
    }

    return (

        <div>
            <div className="successMessage">
                <p>Message have been sent will be in contact shortly</p>
            </div>
            <div className="failMessage">
                <p>Message failed, check if all fields are filled in.</p>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                </div>
                <div>
                    <label>Company</label>
                    <input type="text" name="company" />
                </div>
                <div>
                    <label>Contact Number</label>
                    <input type="number" name="contact_number" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <div>
                    <label>Brief</label>
                    <textarea name="brief" />
                </div>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LeXxt0aAAAAAGuA4ACoCaO6i0sbb7sZL_Ky8ffL"
                        onChange={onChange}
                    />
                <div>
                    <input type="submit" value="Send" className="btn" />
                </div>
            </form>
        </div>
    )
}