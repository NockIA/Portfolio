import { DesktopNav } from "./desktop/desktop_nav";
import { links } from "../../utils/nav_links";
import { MobileNav } from "./mobile/mobile_nav";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <>
      {windowWidth > 700 ? (
        <DesktopNav links={links} />
      ) : (
        <MobileNav links={links} />
      )}
    </>
  );
};

export default NavigationBar;
