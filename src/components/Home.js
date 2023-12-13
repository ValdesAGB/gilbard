import React from 'react'
import styled from 'styled-components'
import { AllBackgroundCover, allCover } from '../data'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

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
  display: flex !important;
  position: relative !important;

  h1 {
    font-size: 90px;
    line-height: 90px;
    font-weight: 300;
    font-family: ${polices.homeFont};
    color: ${colors.installationBuyBtnColor};
    text-shadow: -6px 4px 1px ${colors.aboutColor};
  }

  h3 {
    font-size: 36px;
    line-height: 50px;
    color: ${colors.installationBuyBtnColor};
    text-shadow: -6px 4px 1px ${colors.aboutColor};
    font-family: ${polices.aboutFont};
    margin-bottom: 0.5rem;
  }
`

const CoverContainer = styled.div`
  position: relative;
  width: 50%;
  div {
    position: absolute;
    top: 80px;
    right: 10px;
  }

  img {
    width: 300px;
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
                <div className="col-6">
                  <div>
                    <h1 className="text-white"> LET’S ENJOY MEGA 2019</h1>
                    <h3>MAKE YOUR DREAM TEAM</h3>
                  </div>
                </div>
                <CoverContainer className="col-6">
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
