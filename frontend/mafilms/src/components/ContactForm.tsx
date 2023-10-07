"use client";
import { useState, useEffect } from "react";



export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        // Check if the form has been submitted in session storage
        const isFormSubmitted = sessionStorage.getItem("formSubmitted");

        if (isFormSubmitted === "true") {
            setFormSubmitted(true);
        }
    }, []);


    async function handleSubmit(event: any) {
        event.preventDefault();

        // If form is already submitted, do nothing
        if (formSubmitted) {
            return;
        }
        setLoading(true);
        setFormSubmitted(true);

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value),
        };
        console.log(data);

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log("message sent successfully");
            setLoading(false);
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.message.value = "";

        }
        if (!response.ok) {
            console.log("Error sending message");
            setLoading(false);
        }

        // After submission, set a session storage flag to indicate submission
        sessionStorage.setItem("formSubmitted", "true");

        


    }
    const handlePrivacyToggle = () => {
        setPrivacyAccepted(!privacyAccepted);
    };



    return (

        <form onSubmit={handleSubmit}>

            <h1 className="text-4xl font-bold leading-relaxed">Send us a Message</h1>


            <div className="w-full flex flex-col my-4 text-lg">
                <label className="font-bold text-gray-800 dark:text-white" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    minLength={2}
                    maxLength={100}
                    required
                    placeholder="Your name"
                    className=" p-3 bg-gray-50 border border-gray-100 text-lg text-black rounded-lg dark:bg-gray-200"
                    autoComplete="off"
                    id="name"
                />
            </div>
            <div className="w-full flex flex-col my-4 text-lg">
                <label className="font-bold text-gray-800 dark:text-white" htmlFor="email">
                    E-Mail
                </label>
                <input
                    type="email"
                    minLength={5}
                    maxLength={150}
                    required
                    placeholder="name@emailprovider.com"
                    className=" p-3 bg-gray-50 border border-gray-100 text-lg text-black rounded-lg dark:bg-gray-200"
                    autoComplete="off"
                    id="email" />
            </div>
            <div>
                <label className="font-bold text-gray-800 text-lg dark:text-white" htmlFor="message">
                    Message
                </label>
                <textarea
                    rows={4}
                    required
                    minLength={10}
                    maxLength={500}
                    name="message"
                    placeholder="Leave us a Message"
                    className="w-full p-3 bg-gray-50 border border-gray-100 text-lg text-black rounded-lg dark:bg-gray-200">
                </textarea>

            </div>

            <div className="w-full flex flex-col my-4 text-lg">
                <label className="font-bold text-gray-800">
                    Accept Privacy Statement
                </label>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        required
                        id="privacy"
                        checked={privacyAccepted}
                        onChange={handlePrivacyToggle}
                    />
                    <label htmlFor="privacy" className="ml-2">
                        I accept the <a href="/legalnotes/privacy/" className="text-red-700 underline">privacy statement</a> of MA Films
                    </label>
                </div>
            </div>

            <button id="submitButton" type="submit"
                disabled={loading || formSubmitted}
                className="text-lg font-bold px-4 py-2 w-35 border border-black bg-black disabled:bg-white 
                disabled:text-black text text-white font-medium mt-3 rounded-lg
                transition hover:bg-white/10 hover:text-black dark:bg-gray-600 hover:bg-white"
            >{formSubmitted ? 'Form Submitted' : 'Send Message'}</button>
        </form>
    )
}