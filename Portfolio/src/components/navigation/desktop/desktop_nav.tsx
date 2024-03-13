import { Link } from "react-router-dom";
import { Links } from "../../../utils/nav_links";
import "./desktop_nav.css";
import '../../../styles/global.css';

interface DesktopNavProps {
  links: Array<Links>;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => {
  return (
    <nav className="nav-container row-container">
      <img className="home-icon" src="./src/assets/images/home.png" alt="home_icon" />
      <div className="row-container links-container">
        {links.map((link, index) => (
          <Link className="link-nav" key={index} to={link.url}>{link.name}</Link>
        ))}
      </div>
    </nav>
  );
};
