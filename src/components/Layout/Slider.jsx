import { useState } from "react"
import { Link } from "react-router-dom";
import styles from './Slider.module.css'
import useCounterTime from "../../hooks/useCounterTime";

const images = [
"https://dkstatics-public.digikala.com/digikala-adservice-banners/988e1253752d1fef349a8eb04f7ad428fceffccd_1745773709.jpg?x-oss-process=image/quality,q_95/format,webp",
"https://dkstatics-public.digikala.com/digikala-adservice-banners/50e6f10162fbacfd174b69bc92070852cf5c7bf9_1745837272.jpg?x-oss-process=image/quality,q_95/format,webp",
"https://dkstatics-public.digikala.com/digikala-adservice-banners/424bf590432067a1370441bcc6ee2b76a05c096d_1744010916.jpg?x-oss-process=image/quality,q_95/format,webp",
"https://dkstatics-public.digikala.com/digikala-adservice-banners/5448b1157d3d8edea13e66fedf46024828408c04_1741705464.jpg?x-oss-process=image/quality,q_95/format,webp",
"https://dkstatics-public.digikala.com/digikala-adservice-banners/c2bf123cd30be28951e22680ffae16fcc802e9e2_1744628056.jpg?x-oss-process=image/quality,q_95/format,webp",
"https://dkstatics-public.digikala.com/digikala-adservice-banners/14b6d5f993f25ead61bd24aa2937c5c6ccd0b86c_1745739951.jpg?x-oss-process=image/quality,q_95/format,webp"
];

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isBtnVisible, setIsBtnVisible] = useState(false);
    
    function nextSlide () {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
    
    function prevSlide () {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    useCounterTime(3000, nextSlide);

  return (
    <section className={styles.sliderContainer}>
      {
      (isBtnVisible === true ) ? 
      <button 
      onMouseOver={() => setIsBtnVisible(true)}
      className={`${styles.prevBtn} prevBtn`} 
      onClick={prevSlide}>❮</button> :
      null
      }
      <Link to="" className="h-100">
        <img 
        src={images[currentIndex]} 
        alt="Slide" 
        className={styles.sliderImage}
        onMouseOver={() => setIsBtnVisible(true)}
        onMouseLeave={() => setIsBtnVisible(false)}
        />
      </Link>
      {
      (isBtnVisible === true) ?
      <button 
      onMouseOver={() => setIsBtnVisible(true)}
      className={`${styles.nextBtn} nextBtn`} 
      onClick={nextSlide}>❯</button> :
      null
      }
    </section>
  );
};

export default Slider;
