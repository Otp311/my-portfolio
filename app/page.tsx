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
import two from "/public/images/two.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            <h1 className={styles.o}>O</h1>
            <h1 className={styles.name}>seph</h1>
            <span className={styles.span}>.</span>
          </Link>

          <div className={styles.navlink}>
            <div className={styles.talk}>
              <Link href="/services">Let&apos;s talk</Link>
              <Image src={two} alt="Arrow" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heropage}>
        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <div className={styles.background}>.</div>
              <Image src={cropted1} alt="cropted" width={450} height={450} />
            </div>
          </div>

          <div className={styles.text}>
            <div className={styles.left}>
              <div className={styles.heroName}>
                <span>JOSEPH</span>
              </div>
              <div className={styles.intro}>
                <p>
                  Is your website struggling to keep up with your business
                  goals? Don't settle for a mediocre online presence. Partner
                  with a seasoned web developer who understands that your
                  website is more than just a digital storefront – it's a
                  powerful tool for growth. I specialize in crafting
                  user-friendly websites that not only look stunning but also
                  deliver results, driving engagement, conversions, and
                  ultimately, boosting your bottom line.
                </p>
              </div>

              <div className={styles.buttons}>
                <button className={styles.contact}>Contact me</button>
                <button className={styles.resume}>Download Resume</button>
              </div>
            </div>

            <div className={styles.socialacc}>
              <Image src={facebook} alt="facebook" width={30} height={30} />
              <Image src={instagram} alt="insragram" width={30} height={30} />
              <Image src={twitter} alt="twitter" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Secondsection}>
        <div className={styles.Secondcontent}>
          <div className={styles.about}>
            <span>About me</span>
            <p>
              I'm a passionate web developer who thrives on the creative
              challenges of transforming ideas into captivating digital
              realities. My love for design and technology fuels my drive to
              build websites that are visually appealing, user-friendly, and
              tailored to meet the unique needs of each project. I believe in
              collaboration and open communication to ensure every website I
              create is a true reflection of my client's vision. Driven web
              developer dedicated to building websites that not only look
              stunning but also function flawlessly. With a keen eye for detail
              and a deep understanding of user-centric design principles, I
              create online experiences that are both engaging and effective.
              I'm always eager to learn new technologies and methodologies to
              stay at the forefront of web development.
            </p>
          </div>

          <div className={styles.aboutimg}>
            <div className={styles.aboutimage}>
              <Image src={desk} alt="desk" width={500} height={400} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Thirdcontainer}>
        <div className={styles.skills}>
          <span>Tech Stack Skills</span>

          <div className={styles.Planguages}>
            <div className={styles.next}>
              <Image src={Nextjs} alt="NextJS" width={50} height={50} />
              <span>Next.js</span>
              <p>
                Proficient in building performant web applications with Next.js.
              </p>
            </div>

            <div className={styles.figma}>
              <Image src={figma} alt="Figma" width={50} height={50} />
              <span>Figma</span>
              <p>Adept at designing user interfaces with Figma.</p>
            </div>

            <div className={styles.css}>
              <Image src={css} alt="CSS" width={50} height={50} />
              <span>CSS</span>
              <p>Experienced in styling and layout design using CSS.</p>
            </div>
          </div>

          <div className={styles.Planguages1}>
            <div className={styles.html}>
              <Image src={html} alt="HTML" width={50} height={50} />
              <span>HTML</span>
              <p>Strong foundation in structuring web content with HTML.</p>
            </div>

            <div className={styles.python}>
              <Image src={python} alt="Python" width={50} height={50} />
              <span>Python</span>
              <p>
                Comfortable with Python for backend development and scripting.
              </p>
            </div>

            <div className={styles.react}>
              <Image src={atom} alt="Atom" width={50} height={50} />
              <span>React</span>
              <p>
                Skilled in crafting interactive user interfaces using React.
              </p>
            </div>
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
                We've leveraged the power of Next.js to create an interactive
                and engaging online experience that mirrors the warmth and
                vibrancy of our cafe.
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
}
