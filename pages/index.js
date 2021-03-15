import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";

const Home = () => {
  const slides = [
    {
      img: "/slider/china_random.jpg",
      alt: "china river house",
      width: 900,
      height: 675,
    },
    {
      img: "/slider/noordwijk_woonkamer.jpg",
      alt: "livingroom noordwijk",
      width: 900,
      height: 675,
    },
    {
      img: "/slider/noordwijkerhout_sancta.jpg",
      alt: "sancta noordijkerhout",
      width: 900,
      height: 675,
    },
  ];

  return <Carousel slides={slides} />;
};

export default Home;
