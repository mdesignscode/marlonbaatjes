"use client";
import "@/styles/contact.scss";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useState } from "react";
import LinkedIn from './icons/LinkedIn';
import Github from './icons/Github';
import Resume from './icons/Resume';
import Codepen from './icons/Codepen';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      await emailjs.send(serviceId, templateId, templateParams, userId);

      // Reset the form fields after successful submission
      reset();

      // Show success animation for 3 seconds
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      // Show error animation for 3 seconds
      console.log(error);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  };

  const handleOpenPdf = () => {
    const pdfUrl = "/Marlon Baatjes Front Developer Resume.pdf";

    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank");
  };

  return (
    <article className="contact-page">
      <div className="email_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="top">
            {/* name and email should be row */}
            <div className="form_field">
              {/* <label htmlFor="name">Name</label> */}
              <input
                type="text"
                id="name"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form_field">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
          </div>

          {/* subject and message will be column */}
          <div className="form_field">
            {/* <label htmlFor="subject">Subject</label> */}
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              {...register("subject", { required: true })}
            />
            {errors.subject && <span>This field is required</span>}
          </div>
          <div className="form_field">
            {/* <label htmlFor="message">Message</label> */}
            <textarea
              id="message"
              placeholder="Enter your message here..."
              {...register("message", { required: true })}
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <button type="submit">Send</button>
        </form>
        {showSuccess && (
          <div className="success-message">Email sent successfully!</div>
        )}
        {showError && (
          <div className="error-message">
            Error sending email. Please try again later.
          </div>
        )}
      </div>

      <div className="external_links">
        <div className="sliding-border">
          <Link
            href="https://www.linkedin.com/in/marlonbaatjes"
            target="_blank"
          >
            <LinkedIn />
            <p>My LinkedIn</p>
          </Link>
        </div>

        <div className="sliding-border">
          <Link href="https://github.com/mdesignscode" target="_blank">
            <Github />
            <p>My Github</p>
          </Link>
        </div>

        <div className="sliding-border">
          <span onClick={handleOpenPdf}>
            <Resume />
            <p>My Resume</p>
          </span>
        </div>

        <div className="sliding-border">
          <Link href="https://codepen.io/Marlon-B/pens/public" target="_blank">
            <Codepen />
            <p>My Codepen</p>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Contact;
