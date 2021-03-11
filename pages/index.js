import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { IconButton, Fade } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arrows, setArrows] = useState(false);
  console.log(currentSlide);

  const slides = [
    {
      img: "/slider/china_random.jpg",
      alt: "china river house",
      width: 900,
      height: 600,
    },
    {
      img: "/slider/noordwijk_woonkamer.jpg",
      alt: "livingroom noordwijk",
      width: 900,
      height: 600,
    },
    {
      img: "/slider/noordwijkerhout_sancta.jpg",
      alt: "sancta noordijkerhout",
      width: 900,
      height: 600,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        return slides.length - 1 === prev ? 0 : prev + 1;
      });
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setArrows(true)}
      onMouseLeave={() => setArrows(false)}
    >
      <Fade timeout={1500} in={arrows}>
        <IconButton className={styles.arrow_left} onClick={prevSlide}>
          <ChevronLeftIcon fontSize="large" />
        </IconButton>
      </Fade>
      <Fade timeout={1500} in={arrows}>
        <IconButton className={styles.arrow_right} onClick={nextSlide}>
          <ChevronRightIcon fontSize="large" />
        </IconButton>
      </Fade>

      {slides.map((slide, index) => {
        if (index === currentSlide)
          return (
            <Fade in={index === currentSlide} key={index} timeout={1500}>
              <div className={styles.image}>
                <Image
                  priority
                  src={slide.img}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                />
              </div>
            </Fade>
          );
      })}
    </div>
  );
}
