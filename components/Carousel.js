import styles from "../styles/Carousel.module.css";
import { useState, useEffect } from "react";
import { IconButton, Fade } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Carousel = ({ slides }) => {
  const length = slides.length;
  const lastSlide = slides.length + 1;
  const firstSlide = 1;

  const [currentSlide, setCurrentSlide] = useState(firstSlide);
  const [transition, setTransition] = useState(true);
  const [arrows, setArrows] = useState(false);
  const [btn, setBtn] = useState(false);

  const nextSlide = () => {
    if (currentSlide === lastSlide || btn) return;
    setBtn(true);
    setTimeout(() => {
      setBtn(false);
    }, 800);
    if (!transition) {
      setTransition(true);
    }
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide === 0 || btn) return;
    setBtn(true);
    setTimeout(() => {
      setBtn(false);
    }, 800);
    if (!transition) {
      setTransition(true);
    }
    setCurrentSlide((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!transition) {
        setTransition(true);
      }
      setCurrentSlide((prev) => (prev === lastSlide ? 1 : prev + 1));
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
      <div className={styles.carousel_container}>
        <div
          onTransitionEnd={() => {
            if (currentSlide === lastSlide) {
              setTransition(false);
              setCurrentSlide(firstSlide);
            }
            if (currentSlide === firstSlide - 1) {
              setTransition(false);
              setCurrentSlide(length);
            }
          }}
          className={styles.slider}
          style={{
            transition: transition ? "0.8s ease-in-out" : "none",
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          <img
            className={styles.slider_img}
            src={slides[length - 1].img}
            alt={slides[length - 1].alt}
          />
          {slides.map((slide, index) => {
            return (
              <img
                className={styles.slider_img}
                key={index}
                src={slide.img}
                alt={slide.alt}
              />
            );
          })}
          <img
            className={styles.slider_img}
            src={slides[0].img}
            alt={slides[0].alt}
          />
        </div>
      </div>
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
    </div>
  );
};

export default Carousel;
