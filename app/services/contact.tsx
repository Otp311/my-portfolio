"use client";

import React, { useState, useRef } from "react";
import { sendContactForm } from ".";
import style from "./contact.module.css";
import Image from "next/image";
import facebook from "/public/images/facebook.png";
import instagram from "/public/images/instagram.png";
import twitter from "/public/images/twitter.png";
import Link from "next/link";

const Contact = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef();

  const submitContact = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      comment: formData.get("comment"),
    };
    const res = await sendContactForm(data);
    if (res === 0) {
      setMessage("Thank you for your valuable comment!");
      formRef.current.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.ContactPage}>
        <div className={style.text}>
          <h1 className={style.heading}>Contact Me</h1>
          <p>Let's build something amazing together</p>
        </div>
        <div className={style.messageContainer}>
          {message && (
            <div className={style.message}>
              {message}
              <span onClick={() => setMessage("")}>&times;</span>
            </div>
          )}
        </div>
        <form className={style.form} ref={formRef} onSubmit={submitContact}>
          <label className={style.label}>Name</label>
          <input
            className={style.input}
            name="name"
            required
            type="text"
            minLength={3}
            maxLength={25}
          />
          <label className={style.label}>Email</label>
          <input className={style.input} name="email" required type="email" />
          <label className={style.label}>Message</label>
          <textarea
            className={style.textarea}
            name="comment"
            required
            rows={5}
          ></textarea>
          <button className={style.button} type="submit">
            Send
          </button>
        </form>
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
