import React, { useState, useEffect } from "react"
import styles from "../styles/components/_homeRecipe.module.scss"
import playBtn from "../media/play-btn.webp"
import SlideButton from "./SlideButton"
import { Link } from "gatsby"

export default function HomeRecipe({
  image,
  imageM,
  thumb,
  thumbM,
  header,
  btnText,
  reinit,
  prev,
  next,
  subHeader,
  videoURL,
}) {
  const [play, setPlay] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [hideLeftContainer, setLeftContainer] = useState(false)
  const [hideRightContainer, setRightContainer] = useState(false)
  const [windowWidth, setWindowWidth] = useState(
    window !== "undefined" && window.innerWidth
  )

  useEffect(() => {
    window !== "undefined" &&
      window.addEventListener("resize", () =>
        setWindowWidth(window !== "undefined" && window.innerWidth)
      )
    return (
      window !== "undefined" &&
      window.removeEventListener("resize", () =>
        setWindowWidth(window !== "undefined" && window.innerWidth)
      )
    )
  }, [])
  const playVideo = () => {
    setPlay(true)
    setTimeout(() => {
      setShowVideo(true)
      if (windowWidth <= 768) {
        setLeftContainer(true)
        setRightContainer(true)
        reinit()
      }
    }, 500)
  }
  return (
    <li className={styles.hrContainer}>
      {play && (
        <i
          className="fas fa-times-circle"
          onClick={() => {
            setPlay(false)
            setShowVideo(false)
            if (windowWidth <= 768) {
              setLeftContainer(false)
              setRightContainer(false)
              reinit()
            }
          }}
        ></i>
      )}
      {showVideo && (
        <div className={styles.videoContainer}>
          <iframe
            id="player-1"
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            width="640"
            height="360"
            src={videoURL}
          ></iframe>
        </div>
      )}
      {!hideLeftContainer && (
        <div
          className={`${styles.hrLeftContainer} ${
            play ? styles.slideLeft : ""
          }`}
        >
          <Link to="/#products">
            <img src={windowWidth <= 768 ? imageM : image} alt={header} />
            <h2>{header}</h2>
            {subHeader && <p className={styles.subHeader}>{subHeader}</p>}
            {btnText && (
              <SlideButton
                onClick={() => {
                  const productSection =
                    document !== "undefined" &&
                    document.getElementById("products")
                  productSection.scrollIntoView()
                }}
                text={btnText}
              />
            )}
          </Link>
        </div>
      )}
      {!hideRightContainer && (
        <div
          className={`${styles.hrRightContainer} ${
            play ? styles.slideRight : ""
          }`}
          style={windowWidth <= 768 ? {} : { backgroundImage: `url(${thumb})` }}
          onClick={playVideo}
        >
          <button
            onClick={prev}
            className={`${styles.slickArrow} ${styles.contentPrev}`}
          ></button>
          <button
            onClick={next}
            className={`${styles.slickArrow} ${styles.contentNext}`}
          ></button>
          <img src={playBtn} className={styles.playBtn} alt="Play button"></img>
          {windowWidth <= 768 && (
            <img src={thumbM} className={styles.thumb} alt="Thumb"></img>
          )}
        </div>
      )}
    </li>
  )
}
