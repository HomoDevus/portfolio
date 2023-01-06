import React, { useRef } from 'react'
import arrow from '../../../assets/img/arrow_icon.svg'

export default function WorkCard({ placingClass, recordingURL, title, description, projectURL, dates }) {
    const videoElement = useRef(null)

    return (
        <div className={`works__card ${placingClass}`}>
            <div className="works__card__top">
                <div className="works__card-name">{title}</div>
                <p className="works__card-date">{dates}</p>
            </div>
            <a
                href={projectURL}
                target="_blank"
                rel="noreferrer"
                className="works__card__gif-cover glow"
                onMouseEnter={() => {
                    if (videoElement.current) {
                        videoElement.current.play()
                    }
                }}
                onMouseLeave={() => {
                    if (videoElement.current) {
                        videoElement.current.pause()
                    }
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="works__card__noise">
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="1"
                            numOctaves="6"
                            stitchTiles="stitch"
                        />
                    </filter>

                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
                <video loop ref={videoElement}>
                    <source src={recordingURL} type="video/mp4" />
                </video>
            </a>
            <div className="works__card__footer-container">
                <div className="works__card__footer">
                    <p>{description}</p>
                    <img alt="left arrow" src={arrow} className="works__card__footer__arrow" />
                </div>
            </div>
        </div>
    )
}
