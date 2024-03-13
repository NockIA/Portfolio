import AboutComponent from "../components/about/about";
import NavigationBar from "../components/navigation";
import { AboutDatas } from "../utils/about_properties";
import "../styles/global.css";
import "../styles/home.css";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <main className="column-container container-home-page">
        <AboutComponent
          name={AboutDatas.name}
          description={AboutDatas.description}
        />
        <img
          className="down-chevron"
          src="./src/assets/images/down_chevron.png"
        />
        <span className="separation" />
      </main>
    </>
  );
};

export default HomePage;
