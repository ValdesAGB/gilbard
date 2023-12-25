import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Container = styled.div`
  padding: 20px 0 0 0;

  @media (max-width: 767px) {
    padding: 0;
  }
`

const CoverContainer = styled.div`
  margin-bottom: 30px;
`

const AboutContent = styled.div`
  margin-bottom: 30px;

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 20px;
  }
`

const Title = styled.h3`
  font-family: ${polices.aboutFont};
  color: ${colors.aboutColor};
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 15px;
  font-size: 38px;
  line-height: 45px;
  letter-spacing: 1px;
  transition: all 1s ease;

  @media (max-width: 479px) {
    font-size: 24px;
    line-height: 34px;
  }

  @media (min-width: 480px) and (max-width: 1199px) {
    font-size: 30px;
  }

  .unbelievable {
    color: ${colors.red};
    font-family: ${polices.aboutFont};
  }

  .advanture {
    color: ${colors.violet};
    font-family: ${polices.aboutFont};
  }
`

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 28px;
  margin-bottom: ${(props) => (props.between ? '20px' : 0)};

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
  }
`

function About() {
  return (
    <React.Fragment>
      <section id="about">
        <Container className="container">
          <div className="row align-items-center">
            <CoverContainer className="col-12 col-lg-6">
              <img
                src="https://template.hasthemes.com/gilbard/gilbard/assets/images/about/about.png"
                alt="about"
                className="w-100"
              />
            </CoverContainer>
            <AboutContent className="col">
              <Title>
                IT'S <span className="unbelievable">UNBELIEVABLE</span> FANTASY,
                UNLIMITED <span className="advanture">ADVANTURE</span>
              </Title>
              <Paragraph between>
                Latest Mega 2019 games offer you varioous league and also alow
                you to make you own league and tema sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
              </Paragraph>
              <Paragraph>
                It’s a fantay to play Mega 2019 every one voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos
              </Paragraph>
            </AboutContent>
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default About
