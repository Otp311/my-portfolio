"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import cropted1 from "/public/images/cropted1.png";
import facebook from "/public/images/facebook.png";
import instagram from "/public/images/instagram.png";
import twitter from "/public/images/twitter.png";
import desk from "/public/images/desk.jpg";
import Nextjs from "/public/images/Nextjs.png";
import figma from "/public/images/figma.png";
import css from "/public/images/css.png";
import html from "/public/images/html.png";
import python from "/public/images/python.png";
import atom from "/public/images/atom.png";
import cafe from "/public/images/cafe.png";
import csm from "/public/images/csm.png";
import Contact from "./services/contact";
import chat from "/public/images/chat.gif";
import Downloadbutton from "./components/resumeButton";
import { once } from "events";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const animationVariants2 = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariants3 = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const animationVariants4 = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariants5 = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible] as const;
};

const Home: React.FC = () => {
  const [ref1, isInView1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isInView2] = useIntersectionObserver({ threshold: 0.1 });
  const [ref3, isInView3] = useIntersectionObserver({ threshold: 0.1 });
  const [ref4, isInView4] = useIntersectionObserver({ threshold: 0.1 });
  const [ref5, isInView5] = useIntersectionObserver({ threshold: 0.1 });
  const [ref6, isInView6] = useIntersectionObserver({ threshold: 0.1 });
  const [ref7, isInView7] = useIntersectionObserver({ threshold: 0.1 });
  const [ref8, isInView8] = useIntersectionObserver({ threshold: 0.1 });
  const [ref9, isInView9] = useIntersectionObserver({ threshold: 0.1 });
  const [ref10, isInView10] = useIntersectionObserver({ threshold: 0.1 });
  const [ref11, isInView11] = useIntersectionObserver({ threshold: 0.1 });
  const [ref12, isInView12] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className={styles.container}>
      <motion.div
        ref={ref12}
        initial="hidden"
        animate={isInView12 ? "visible" : "hidden"}
        variants={animationVariants5}
        transition={{ duration: 1.5 }}
        className={styles.header}
      >
        <div className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            <h1 className={styles.o}>O</h1>
            <h1 className={styles.name}>seph</h1>
            <span className={styles.span}>.</span>
          </Link>

          <div className={styles.navlink}>
            <div className={styles.talk}>
              <Link className={styles.rigthLink} href="/services">
                Let&apos;s talk{" "}
                <Image src={chat} alt="chat" width={60} height={60} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref1}
        initial="hidden"
        animate={isInView1 ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 1.5 }}
        className={styles.heropage}
      >
        <div className={styles.info}>
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            variants={animationVariants2}
            transition={{ duration: 1.5 }}
            className={styles.imageContainer}
          >
            <div className={styles.image}>
              <Image src={cropted1} alt="cropted" width={450} height={450} />
            </div>
          </motion.div>

          <div className={styles.text}>
            <div className={styles.left}>
              <motion.div
                ref={ref3}
                initial="hidden"
                animate={isInView3 ? "visible" : "hidden"}
                variants={animationVariants3}
                transition={{ duration: 1.5 }}
                className={styles.heroName}
              >
                <span>JOSEPH</span>
              </motion.div>
              <motion.div
                ref={ref4}
                initial="hidden"
                animate={isInView4 ? "visible" : "hidden"}
                variants={animationVariants4}
                transition={{ duration: 1.5 }}
                className={styles.intro}
              >
                <p>
                  Is your website struggling to keep up with your business
                  goals? Don&apos;t settle for a mediocre online presence.
                  Partner with a seasoned web developer who understands that
                  your website is more than just a digital storefront –
                  it&apos;s a powerful tool for growth. I specialize in crafting
                  user-friendly websites that not only look stunning but also
                  deliver results, driving engagement, conversions, and
                  ultimately, boosting your bottom line.
                </p>
              </motion.div>

              <div className={styles.buttons}>
                <Link href="/services" className={styles.contact}>
                  Contact me
                </Link>
                <Downloadbutton />
              </div>
            </div>

            <div className={styles.socialacc}>
              <div className={styles.fb}>
                <Image src={facebook} alt="facebook" width={30} height={30} />
              </div>
              <div className={styles.ig}>
                <Image src={instagram} alt="insragram" width={30} height={30} />
              </div>
              <div className={styles.tw}>
                <Image src={twitter} alt="twitter" width={30} height={30} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref5}
        initial="hidden"
        animate={isInView5 ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 1.1 }}
        className={styles.Secondsection}
      >
        <div className={styles.Secondcontent}>
          <div className={styles.about}>
            <span>About me</span>
            <p>
              I&apos;m a passionate web developer who thrives on the creative
              challenges of transforming ideas into captivating digital
              realities. My love for design and technology fuels my drive to
              build websites that are visually appealing, user-friendly, and
              tailored to meet the unique needs of each project. I believe in
              collaboration and open communication to ensure every website I
              create is a true reflection of my client&apos;s vision. Driven web
              developer dedicated to building websites that not only look
              stunning but also function flawlessly. With a keen eye for detail
              and a deep understanding of user-centric design principles, I
              create online experiences that are both engaging and effective.
              I&apos;m always eager to learn new technologies and methodologies
              to stay at the forefront of web development.
            </p>
          </div>

          <div className={styles.aboutimg}>
            <div className={styles.aboutimage}>
              <Image src={desk} alt="desk" width={500} height={400} />
            </div>
          </div>
        </div>
      </motion.div>

      <div className={styles.Thirdcontainer}>
        <div className={styles.skills}>
          <span>Tech Stack Skills</span>

          <div className={styles.Planguages}>
            <motion.div
              ref={ref6}
              initial="hidden"
              animate={isInView6 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 1 }}
              className={styles.next}
            >
              <Image src={Nextjs} alt="NextJS" width={50} height={50} />
              <span>Next.js</span>
              <p>
                Proficient in building performant web applications with Next.js.
              </p>
            </motion.div>

            <motion.div
              ref={ref7}
              initial="hidden"
              animate={isInView7 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 1.5 }}
              className={styles.figma}
            >
              <Image src={figma} alt="Figma" width={50} height={50} />
              <span>Figma</span>
              <p>Adept at designing user interfaces with Figma.</p>
            </motion.div>

            <motion.div
              ref={ref8}
              initial="hidden"
              animate={isInView8 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 2 }}
              className={styles.css}
            >
              <Image src={css} alt="CSS" width={50} height={50} />
              <span>CSS</span>
              <p>Experienced in styling and layout design using CSS.</p>
            </motion.div>
          </div>

          <div className={styles.Planguages1}>
            <motion.div
              ref={ref9}
              initial="hidden"
              animate={isInView9 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 1 }}
              className={styles.html}
            >
              <Image src={html} alt="HTML" width={50} height={50} />
              <span>HTML</span>
              <p>Strong foundation in structuring web content with HTML.</p>
            </motion.div>

            <motion.div
              ref={ref10}
              initial="hidden"
              animate={isInView10 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 1.5 }}
              className={styles.python}
            >
              <Image src={python} alt="Python" width={50} height={50} />
              <span>Python</span>
              <p>
                Comfortable with Python for backend development and scripting.
              </p>
            </motion.div>

            <motion.div
              ref={ref11}
              initial="hidden"
              animate={isInView11 ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 2 }}
              className={styles.react}
            >
              <Image src={atom} alt="Atom" width={50} height={50} />
              <span>React</span>
              <p>
                Skilled in crafting interactive user interfaces using React.
              </p>
            </motion.div>
          </div>
        </div>

        <div className={styles.projects}>
          <span>Projects</span>
          <div className={styles.projectimage}>
            <div className={styles.box}>
              <div className={styles.cafe}>
                <div className={styles.imagecontainer1}>
                  <Image src={cafe} alt="CAFE" width={450} height={250} />
                </div>
              </div>
              <Link
                className={styles.link}
                href="https://my-app-hype-upcafe.vercel.app/"
              >
                Cafe
              </Link>
              <p>
                We&apos;ve leveraged the power of Next.js to create an
                interactive and engaging online experience that mirrors the
                warmth and vibrancy of our cafe.
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.csm}>
                <div className={styles.imagecontainer}>
                  <Image src={csm} alt="CSM" width={450} height={250} />
                </div>
              </div>
              <Link className={styles.link} href="#">
                Capstone Project
              </Link>
              <p>
                Explore my capstone project, built with a Python-powered backend
                and a custom HTML/CSS frontend, demonstrating my ability to
                create interactive and dynamic web applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Footer}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
