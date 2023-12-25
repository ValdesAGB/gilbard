import React from 'react'
import { AllBackgroundCover } from '../data'
import styled, { keyframes } from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

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
  background-color: ${colors.violet};
  border-right: 3px solid ${colors.installationBuyBtnColor};

  @media (max-width: 767px) {
    display: block;
    border: 0;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    margin-top: 0.5rem;
  }

  .watch {
    background-image: url(${AllBackgroundCover.galleryBgCover});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 145px 65px;
    color: ${colors.installationBuyBtnColor};
   
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;


    @media (max-width: 1499px) {
      padding: 15px 30px;
    }

    padding: 145px 65px;


    h2 {
      font-size: 45px;
      line-height: 52px;
      max-width: 305px;
      text-align: left;
      color: ${colors.installationBuyBtnColor};
      text-shadow: -4px 2px 1px ${colors.aboutColor};
      font-family: ${polices.aboutFont};

      @media (max-width: 767px) {
        font-size: 36px;
        line-height: 46px;
      }

      @media (min-width: 768px) and (max-width: 1199px) {
        font-size: 30px;
        line-height: 36px;
      }

      @media (min-width: 1200px) and (max-width: 1499px) {
        font-size: 34px;
        line-height: 40px;
    }
      }
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
      background-color: ${colors.videoBgColor};
    }

    a {
      position: absolute;
      bottom: 35px;
      left: 45px;
      z-index: 9;
      font-size: 24px;
      line-height: 52px;
      color: ${colors.installationBuyBtnColor};

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
