import React from 'react'
import { AllBackgroundCover } from '../data'
import styled, { keyframes } from 'styled-components'

const BtnVideoAnimation = keyframes`
0% {
    letter-spacing: 10px;
    opacity: 0;
}

40% {
    opacity: 0.6;
}

100% {
    letter-spacing: normal;
    opacity: 1;
}`

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #061da4;
  border-right: 3px solid #ffffff;

  .watch {
    background-image: url(${AllBackgroundCover.galleryBgCover});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 145px 65px;
    color: #ffffff;
    padding: 15px 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    h2 {
      font-size: 34px;
      line-height: 40px;
      max-width: 305px;
      text-align: left;
      color: #ffffff;
      text-shadow: -4px 2px 1px #252525;
      font-family: 'Nova Round', cursive;
    }
  }

  .video {
    vertical-align: middle;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }

    a {
      position: absolute;
      bottom: 35px;
      left: 45px;
      z-index: 9;
      font-size: 24px;
      line-height: 52px;
      color: #ffffff;

      display: inline-block;

      text-decoration: none;
      cursor: pointer;

      &:hover {
        animation: ${BtnVideoAnimation} 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)
          both;
      }

      i {
        margin-right: 15px;
        font-size: 30px;
      }
    }
  }
`

function GalleryVideo() {
  return (
    <React.Fragment>
      <VideoContainer>
        <div className="watch">
          <h2>watch video demo play now</h2>
        </div>
        <div className="video">
          <img
            src="https://template.hasthemes.com/gilbard/gilbard/assets/images/video/video-font.jpg"
            alt="video"
            className="w-100"
          />
          <a href="https://www.youtube.com/watch?v=ZABfjs0B2Ys">
            <i className="bi bi-play-circle" />
            Play Video
          </a>
        </div>
      </VideoContainer>
    </React.Fragment>
  )
}

export default GalleryVideo
