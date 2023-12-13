import React from 'react'
import NewslettersForm from './NewslettersForm'
import { AllBackgroundCover, allCover } from '../data'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Container = styled.div`
  padding: 80px 0 0 0;
`

const Title = styled.h3`
  font-size: 36px;
  line-height: 40px;
  margin-bottom: 40px;
  font-family: ${polices.aboutFont};
  color: ${colors.aboutColor};
  font-weight: 400;
  margin-top: 0;

  .newsletter {
    color: ${colors.red};
    font-family: ${polices.aboutFont};
  }

  .lastest,
  .video {
    color: ${colors.violet};
    font-family: ${polices.aboutFont};
  }
`

const Content = styled.div`
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

const Cover = styled.div`
  margin-top: -55px;
  margin-bottom: -30px;
  text-align: end;

  img {
    vertical-align: middle;
  }
`

function Newsletters() {
  return (
    <React.Fragment>
      <section id="newslatter">
        <Container className="container">
          <Content className="row">
            <TitleContainer className="col-7">
              <Title>
                SUBSCRIBE OUR <span className="newsletter">NEWSLETTER</span> GET
                ALL <span className="lastest">LATEST</span> NEWS, UPDATE,
                <span className="video"> VIDEOS</span> AND OFFERS
              </Title>

              <NewslettersForm />
            </TitleContainer>

            <Cover className="col">
              <img src={allCover.newslatersCover} alt="newslatersCover" />
            </Cover>
          </Content>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Newsletters
