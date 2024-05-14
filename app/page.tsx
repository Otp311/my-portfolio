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
import Contact from ".//services/contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <h1 className={styles.o}>O</h1>
            <h1 className={styles.name}>seph</h1>
            <span className={styles.span}>.</span>
          </div>

          <div className={styles.navlink}>
            <div className={styles.talk}>
              <Link href="#">Let&apos;s talk</Link>
            </div>

            <div className={styles.links}>
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="/services">Contact</Link>
              <Link href="#">Resume</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heropage}>
        <div className={styles.info}>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
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
                  Need a website that works as hard as you do? Partner with a
                  web developer dedicated to delivering user-friendly
                  experiences.
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
        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,192L60,208C120,224,240,256,360,229.3C480,203,600,117,720,96C840,75,960,117,1080,112C1200,107,1320,53,1380,26.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className={styles.Secondcontent}>
          <div className={styles.about}>
            <span>About me</span>
            <p>
              Aspiring web developer with a passion for building functional and
              visually appealing websites, inspired by the intersection of
              design and technology, and always seeking new ways to improve user
              experiences.
            </p>

            <button className={styles.aboutButton}>Learn more</button>
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
          <span>Skills</span>

          <div className={styles.Planguages}>
            <div className={styles.next}>
              <Image src={Nextjs} alt="NextJS" width={50} height={50} />
              Next.js
            </div>

            <div className={styles.figma}>
              <Image src={figma} alt="Figma" width={50} height={50} />
              Figma
            </div>

            <div className={styles.css}>
              <Image src={css} alt="CSS" width={50} height={50} />
              CSS
            </div>
          </div>

          <div className={styles.Planguages1}>
            <div className={styles.html}>
              <Image src={html} alt="HTML" width={50} height={50} />
              HTML
            </div>

            <div className={styles.python}>
              <Image src={python} alt="Python" width={50} height={50} />
              Python
            </div>

            <div className={styles.react}>
              <Image src={atom} alt="Atom" width={50} height={50} />
              React
            </div>
          </div>
        </div>

        <div className={styles.projects}>
          <span>Projects</span>
          <div className={styles.projectimage}>
            <div className={styles.cafe}>
              <div className={styles.imagecontainer1}>
                <Image src={cafe} alt="CAFE" width={500} height={250} />
              </div>
              <Link
                className={styles.cafelink}
                href="https://my-app-hype-upcafe.vercel.app/"
              >
                Cafe
              </Link>
            </div>

            <div className={styles.csm}>
              <div className={styles.imagecontainer}>
                <Image src={csm} alt="CSM" width={500} height={250} />
              </div>
              <Link className={styles.csmlink} href="#">
                Capstone Project
              </Link>
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
