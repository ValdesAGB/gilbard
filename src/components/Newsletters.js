import React from 'react'
import NewslettersForm from './NewslettersForm'
import { AllBackgroundCover, allCover } from '../data'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Container = styled.div`
  padding-top: 80px;

  @media (max-width: 767px) {
    padding-top: 50px;
  }
`

const Content = styled.div`
  justify-content: space-between;
  background-image: url(${AllBackgroundCover.installationBgCover});
  background-position: right;
  background-repeat: no-repeat;
  align-items: center;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 767px) {
    background-position: bottom;
  }
`

const TitleContainer = styled.div`
  padding: 60px 65px;

  @media (max-width: 767px) {
    padding: 15px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 15px 30px;
    padding-right: 80px;
  }
`

const Title = styled.h3`
  font-size: 36px;
  line-height: 40px;
  margin-bottom: 40px;
  font-family: ${polices.aboutFont};
  color: ${colors.aboutColor};
  font-weight: 400;
  margin-top: 0;

  .newsletter,
  .rec {
    color: ${colors.violet};
    font-family: ${polices.aboutFont};
  }

  .lastest {
    color: ${colors.red};
    font-family: ${polices.aboutFont};
  }

  @media (max-width: 991px) {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 20px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 30px;
    line-height: 36px;
  }
`

const Cover = styled.div`
  margin-top: -55px;
  margin-bottom: -30px;
  text-align: end;

  img {
    vertical-align: middle;

    @media (max-width: 767px) {
      width: 75%;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    margin-top: 20px;
    margin-bottom: 0px;
  }
`

function Newsletters() {
  return (
    <React.Fragment>
      <section id="newslatter">
        <Container className="container">
          <Content className="row">
            <TitleContainer className="col-12 col-md-6 col-lg-7">
              <Title>
                SUBSCRIBE OUR <span className="newsletter">NEWSLETTER</span> GET
                ALL <span className="lastest">LATEST</span> NEWS, UPDATE,{' '}
                <span className="rec">VIDEOS</span> AND OFFERS
              </Title>

              <NewslettersForm />
            </TitleContainer>

            <Cover className="col-md-6 col-lg-5">
              <img src={allCover.newslatersCover} alt="newslatersCover" />
            </Cover>
          </Content>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Newsletters
