import React from 'react'
import styled from 'styled-components'
import { AllBackgroundCover, allCover } from '../data'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'
import 'animate.css'

const Container = styled.div`
  background-image: url(${AllBackgroundCover.homeBgCover});
  height: 800px;
  justify-content: center;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 1;
  align-items: center;
  display: flex;
  position: relative;

  @media (min-width: 768px) and (max-width: 991px) {
    height: 500px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    height: 700px;
  }

  @media (min-width: 1500px) {
    height: 1075px;
  }

  h1 {
    font-size: 90px;
    line-height: 90px;
    font-weight: 300;
    font-family: ${polices.homeFont};
    color: ${colors.installationBuyBtnColor};
    text-shadow: -6px 4px 1px ${colors.aboutColor};

    @media (max-width: 767px) {
      font-size: 36px;
      line-height: 45px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 50px;
      line-height: 50px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      font-size: 80px;
      line-height: 80px;
    }

    @media (min-width: 1500px) {
      font-size: 100px;
      line-height: 90px;
    }
  }

  h3 {
    font-size: 36px;
    line-height: 50px;
    color: ${colors.installationBuyBtnColor};
    text-shadow: -6px 4px 1px ${colors.aboutColor};
    font-family: ${polices.aboutFont};
    margin-bottom: 0.5rem;

    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 30px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 28px;
      line-height: 36px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      font-size: 34px;
      line-height: 46px;
    }
  }
`

const CoverContainer = styled.div`
  position: relative;

  div {
    position: absolute;
    top: 80px;
    right: 10px;
    text-align: center;

    @media (max-width: 767px) {
      position: static;
    }

    @media (min-width: 768px) and (max-width: 1199px) {
      top: -60px;
      right: 10px;
    }

    @media (min-width: 1500px) and (max-width: 1700px) {
      top: -110px;
      right: -35px;
    }

    @media (min-width: 1701px) {
      top: -100px;
      right: -100px;
    }
  }

  img {
    @media (max-width: 991px) {
      width: 200px;
    }

    @media (min-width: 992px) and (max-width: 1499px) {
      width: 300px;
    }

    @media (min-width: 1500px) and (max-width: 1700px) {
      width: 85%;
    }
  }
`

function Home() {
  return (
    <React.Fragment>
      <section>
        <Container className="row">
          <div>
            <div className="container">
              <div className="row">
                <div className=" col-md-6">
                  <div>
                    <h1 className="animate__animated animate__slideInUp">
                      {' '}
                      LET’S ENJOY MEGA 2019
                    </h1>
                    <h3 className="animate__animated animate__slideInUp animate__slow">
                      MAKE YOUR DREAM TEAM
                    </h3>
                  </div>
                </div>
                <CoverContainer className="col-md-6">
                  <div>
                    <img src={allCover.homeCover} alt="footer" />
                  </div>
                </CoverContainer>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Home
