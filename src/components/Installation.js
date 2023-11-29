import React from 'react'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'
import { allCover } from '../data'

const Title = styled.h3`
  font-family: ${polices.aboutFont};
  color: ${colors.aboutColor};
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 15px;
  font-size: 38px;
  line-height: 45px;
  letter-spacing: 1px;

  .install {
    color: ${colors.red};
  }

  .easy {
    color: ${colors.violet};
  }
`

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 20px;
  max-width: 530px;
  font-weight: 400;
`

const BUY = styled.a`
  background-color: ${colors.violet};
  color: ${colors.installationBuyBtnColor};
  font-size: 20px;
  line-height: 25px;
  height: 50px;
  font-weight: 400;
  font-family: ${polices.aboutFont};
  padding: 15px 42px;
  text-transform: uppercase;
  border-radius: 0px;
  border: 0;
  position: relative;
  transition: all 0.3s ease 0s;
  display: inline-block;
  margin-top: 15px;
  text-decoration: none;

  &:hover {
    background-color: ${colors.red};
  }
`

function Installation() {
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src={allCover.installationCover}
                alt="about"
                className="w-100"
              />
            </div>
            <div className="col">
              <Title>
                IT’S SIMPLE <span className="install">TO INSTALL</span>{' '}
                <span className="easy">EASY</span> FOR YOU TO PLAY...
              </Title>
              <Paragraph between>
                All football leagues have been added also you can create your
                own Leagues.
              </Paragraph>
              <Paragraph>
                Insert DVD to your PC - Dobble click to setup file - Create your
                own team - Start play
              </Paragraph>
              <BUY href="#">BUY NOW</BUY>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Installation
