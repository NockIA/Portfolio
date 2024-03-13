import { Links } from "../../../utils/nav_links";
import "./mobile_nav.css";
import "../../../styles/global.css";
import { Burger } from "./burger/burger";
import { Link } from "react-router-dom";
import { useState } from "react";

interface MobileNavProps {
  links: Array<Links>;
}

export const MobileNav: React.FC<MobileNavProps> = ({ links }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleSwitchAnim = () => {
    const modal = document.getElementById("nav-modal");
    if (modal) {
      if (isModalOpened) {
        modal.classList.add("close-modal");
        modal.classList.remove("open-modal");
      } else {
        modal.classList.add("open-modal");
        modal.classList.remove("close-modal");
      }
    }
  };

  const handleModal = (isOpened: boolean) => {
    setIsModalOpened(isOpened);
    handleSwitchAnim();
  };

  return (
    <nav className="column-container container-mobile-nav">
      <section className="row-container container-mobile-nav-header">
        <img
          className="home-icon"
          src="./src/assets/images/home.png"
          alt="home_icon"
        />
        {isModalOpened ? (
          <img
            onClick={() => {
              setIsModalOpened(false);
              handleSwitchAnim();
            }}
            className="close-icon"
            src="./src/assets/images/close.png"
            alt="close_icon"
          />
        ) : (
          <Burger isOpened={handleModal} />
        )}
      </section>
      {/* {isModalOpened && ( */}
      <section id="nav-modal" className="column-container container-links">
        {links.map((link, index) => (
          <Link className="links-mobile-nav" key={index} to={link.url}>
            {link.name}
          </Link>
        ))}
      </section>
      {/* )} */}
    </nav>
  );
};
