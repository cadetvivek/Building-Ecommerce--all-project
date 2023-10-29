import { Fragment } from "react";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <Fragment>
      <div className={styles.aboutSection}>
        <h1 style={{ fontWeight: "bolder" }}>About Us Page</h1>
        <p>
          A band party is a fun and exciting event that brings people together
          to enjoy live music and entertainment. Whether it's a small gathering
          in someone's backyard or a large festival in a public space, a band
          party is a great way to socialize and unwind while enjoying the
          talents of musicians and performers.
        </p>
        <p>
          If you're planning a band party, it's important to consider the
          logistics of the event, such as finding a suitable venue, booking the
          bands, and ensuring that there is enough space and facilities for
          attendees. With proper planning and organization, a band party can be
          a memorable and enjoyable experience for everyone involved.
        </p>
      </div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bolder",
          margin: "2rem",
        }}
      >
        Our Team
      </h2>
      <div className={styles.front}>
        <img
        src="https://media.licdn.com/dms/image/D4D03AQEwX3J8MNuWLg/profile-displayphoto-shrink_200_200/0/1678333082961?e=1704326400&v=beta&t=Fm5bIpDtXO1WhwESQ0m_maFqF-g8sErGc8FhDj5bwNo"
          alt="vivek kushwah"
          className={styles.aboutPageImage}
          loading="lazy"
        />
        <div className={styles.container}>
          <h2>vivek kushwah</h2>
          <p className={styles.title}>Guitarist</p>
          <p>Performer Of The Year</p>
          <p>hellowol646@gmail.com</p>
          <p>
            <button className={styles.button1}>Contact</button>
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.front}>
              <img
                src="https://media.licdn.com/dms/image/D4D03AQFklnrDJ0xXBA/profile-displayphoto-shrink_200_200/0/1677991740811?e=1704326400&v=beta&t=j--8PuR0h8jdytUoU7lZEdlTDLeH5Xb2fLuPMyBo1pw"
                alt="yogesh"
                className={styles.aboutPageImage}
                loading="lazy"
              />
              <div className={styles.container}>
                <h2>yogesh kushwah</h2>
                <p className={styles.title}>Lead Singer</p>
                <p>Top International Singer</p>
                <p>kushwahyogesh93@gmail.com</p>
                <p>
                  <button className={styles.button}>Contact</button>
                </p>
              </div>
            </div>
            <div className={styles.back}>
              <img
              src="https://media.licdn.com/dms/image/D4D03AQFklnrDJ0xXBA/profile-displayphoto-shrink_200_200/0/1677991740811?e=1704326400&v=beta&t=j--8PuR0h8jdytUoU7lZEdlTDLeH5Xb2fLuPMyBo1pw"
                alt="yogesh"
                className={styles.aboutPageImage}
                loading="lazy"
              />
              <div className={styles.container}>
                <h2>yogesh kushwah</h2>
                <p className={styles.title}>Lead Singer</p>
                <p>Top International Singer</p>
                <p>kushwahyogesh93@gmail.com</p>
                <p>
                  <button className={styles.button}>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.front}>
              <img
                src="https://media.licdn.com/dms/image/D4D03AQFyxlU-hIrKlA/profile-displayphoto-shrink_100_100/0/1675894119967?e=1704326400&v=beta&t=ivdDxxFDYKQtlQG1rORgLCLbxnyO7j6fX2ofhWzR4nQ"
                alt="Mike"
                className={styles.aboutPageImage}
                loading="lazy"
              />
              <div className={styles.container}>
                <h2>Rahul Rajak</h2>
                <p className={styles.title}>Drummer</p>
                <p>International Drummer.</p>
                <p>rahulrajak525@gmail.com</p>
                <p>
                  <button className={styles.button}>Contact</button>
                </p>
              </div>
            </div>
            <div className={styles.back}>
              <img
                src="https://media.licdn.com/dms/image/D4D03AQFyxlU-hIrKlA/profile-displayphoto-shrink_100_100/0/1675894119967?e=1704326400&v=beta&t=ivdDxxFDYKQtlQG1rORgLCLbxnyO7j6fX2ofhWzR4nQ"
                alt="Mike"
                className={styles.aboutPageImage}
                loading="lazy"
              />
              <div className={styles.container}>
                <h2>Rahul Rajak</h2>
                <p className={styles.title}>Drummer</p>
                <p>International Drummer.</p>
                <p>rahulrajak525@gmail.com</p>
                <p>
                  <button className={styles.button}>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.front}>
              <img
              src="https://media.licdn.com/dms/image/C4E03AQHEOC4ada29ZQ/profile-displayphoto-shrink_100_100/0/1633865879429?e=1704326400&v=beta&t=pFZ5U1ZZoOBi3npv9qLHhxDAKqawt6eefk29FVHA440"
                alt="John"
                className={styles.aboutPageImage}
                loading="lazy"
              />
              <div className={styles.container}>
                <h2>C.K. Sisodia</h2>
                <p className={styles.title}>Dancer</p>
                <p>World Class Dancer.</p>
                <p>cksisodia3@gmail.com</p>
                <p>
                  <button className={styles.button}>Contact</button>
                </p>
              </div>
            </div>
            <div className={styles.back}>
              <img
              src="https://media.licdn.com/dms/image/C4E03AQHEOC4ada29ZQ/profile-displayphoto-shrink_100_100/0/1633865879429?e=1704326400&v=beta&t=pFZ5U1ZZoOBi3npv9qLHhxDAKqawt6eefk29FVHA440"
                alt="John"
                className={styles.aboutPageImage}
                loading="lazy"
              />
              <div className={styles.container}>
                <h2>C.K. Sisodia</h2>
                <p className={styles.title}>Dancer</p>
                <p>World Class Dancer.</p>
                <p>cksisodia3@gmail.com</p>
                <p>
                  <button className={styles.button}>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutPage;
