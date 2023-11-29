import React from 'react'
import NewslettersForm from './NewslettersForm'
import { AllBackgroundCover, allCover } from '../data'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Title = styled.h3`
  font-size: 36px;
  line-height: 40px;
  margin-bottom: 40px;
  font-family: ${polices.aboutFont};
  color: ${colors.aboutColor};
  font-weight: 400;
  margin-top: 0;
`

const Container = styled.div`
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;

  justify-content: space-between;
  background-image: url(${AllBackgroundCover.installationBgCover});
  background-position: right;
  background-repeat: no-repeat;
  -webkit-box-align: center;

  align-items: center;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
`

const TitleContainer = styled.div`
  padding: 60px 65px;
`

const ImgContainer = styled.div`
  margin-top: -55px;
  margin-bottom: -30px;

  img {
    vertical-align: middle;
  }
`

function Newsletters() {
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <Container className="row">
            <TitleContainer className="col-7">
              <Title>
                SUBSCRIBE OUR NEWSLETTER GET ALL LATEST NEWS, UPDATE, VIDEOS AND
                OFFERS
              </Title>

              <NewslettersForm />
            </TitleContainer>

            <ImgContainer className="col">
              <img src={allCover.newslatersCover} alt="newslatersCover" />
            </ImgContainer>
          </Container>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Newsletters
