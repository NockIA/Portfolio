import "./about.css";
import "../../styles/global.css";
import { AboutProps } from "../../utils/about_properties";

const AboutComponent: React.FC<AboutProps> = ({ name, description }) => {
  return (
    <section className="container-global-about">
      <section id="#about" className="row-container container-about-page">
        <article className="column-container container-informations">
          <h1>{name}</h1>
          <div className="column-container container-descriptions">
            {description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
          <a href="#contacts" className="row-container contact-button">
            <p className="contact-link">{"Contactez-moi"}</p>
            <img src="./src/assets/images/arrow_right.png" />
          </a>
        </article>
        <div className="container-profile-picture">
          <img
            className="profile-picture"
            src="./src/assets/images/profile_picture.png"
            alt="profile_picture"
          />
        </div>
      </section>
    </section>
  );
};

export default AboutComponent;
