import AboutComponent from "../components/about/about";
import NavigationBar from "../components/navigation";
import { AboutDatas } from "../utils/about_properties";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <AboutComponent
        name={AboutDatas.name}
        description={AboutDatas.description}
      />
    </>
  );
};

export default HomePage;
