import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Container = styled.div`
  padding: 20px 0 0 0;
`

const AboutContent = styled.div`
  margin-bottom: 30px !important;
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
  max-width: 530px;
`

function About() {
  return (
    <React.Fragment>
      <section id="about">
        <Container className="container">
          <div className="row justiify-content-end align-items-center">
            <div className="col-6">
              <img
                src="https://template.hasthemes.com/gilbard/gilbard/assets/images/about/about.png"
                alt="about"
                className="w-100"
              />
            </div>
            <AboutContent className="col">
              <Title className="w-100">
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
