"use client";

import React, { useState, useRef } from "react";
import { sendContactForm } from ".";
import style from "./contactPage.module.css";
import emailjs from "emailjs-com";
import Image from "next/image";
import facebook from "/public/images/facebook.png";
import instagram from "/public/images/instagram.png";
import twitter from "/public/images/twitter.png";
import Link from "next/link";
import fastbackward from "/public/images/fastbackward.gif";
import back from "/public/images/back.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
    };

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      setMessage("Thank you for reaching out!");
      formRef.current?.reset();
      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      setMessage("Something went wrong! Please try again");
    }
  };
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.navbar}>
          <Link href="/" className={style.logo}>
            <h1 className={style.o}>O</h1>
            <h1 className={style.name}>seph</h1>
            <span className={style.span}>.</span>
          </Link>

          <div className={style.navlink}>
            <div className={style.talk}>
              <Link className={style.rigthLink} href="/">
                Back
                <Image
                  src={fastbackward}
                  alt="fastbackward"
                  width={30}
                  height={25}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Main}>
        <div className={style.ContactPage}>
          <div className={style.Image}>
            <Image src={back} alt="Back" width={600} height={600} />
          </div>
          <div className={style.rigthside}>
            <div className={style.text}>
              <h1 className={style.heading}>Contact Me</h1>
              <p>
                Like what you see? Let&apos;s build something amazing together!
                Contact me today for a free consultation. Your dream website is
                just a click away! Contact me now to get started.
              </p>
            </div>

            <form className={style.form} ref={formRef} onSubmit={submitContact}>
              <div className={style.messageContainer}>
                {message && (
                  <div className={style.message}>
                    {message}
                    <span onClick={() => setMessage("")}>&times;</span>
                  </div>
                )}
              </div>
              <label className={style.label}>Name</label>
              <input
                className={style.input}
                name="user_name"
                required
                onChange={handleChange}
                type="text"
                minLength={3}
                maxLength={25}
              />
              <label className={style.label}>Email</label>
              <input
                className={style.input}
                name="use_email"
                required
                onChange={handleChange}
                type="email"
              />
              <label className={style.label}>Message</label>
              <textarea
                className={style.textarea}
                name="message"
                required
                onChange={handleChange}
                rows={5}
              ></textarea>
              <button className={style.button} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={style.horizontalLine}></div>
      <footer className={style.footer}>
        <div className={style.footerTop}>
          <span>Joseph</span>

          <div className={style.socialImages}>
            <Image src={facebook} alt="facebook" width={25} height={25} />
            <Image src={instagram} alt="instagram" width={25} height={25} />
            <Image src={twitter} alt="twitter" width={25} height={25} />
          </div>
        </div>

        <div className={style.back}>
          <Link href="/">Back to top</Link>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
