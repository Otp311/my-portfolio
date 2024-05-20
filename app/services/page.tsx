"use client";

import React, { useState, useRef } from "react";
import { sendContactForm } from ".";
import style from "./contactPage.module.css";
import Image from "next/image";
import facebook from "/public/images/facebook.png";
import instagram from "/public/images/instagram.png";
import twitter from "/public/images/twitter.png";
import Link from "next/link";
import fastbackward from "/public/images/fastbackward.gif";
import back from "/public/images/back.jpg";

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
              <input
                className={style.input}
                name="email"
                required
                type="email"
              />
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
