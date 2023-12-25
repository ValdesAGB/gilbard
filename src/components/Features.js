import React from 'react'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'
import { allCover } from '../data'

const Container = styled.div`
  padding: 50px 0 60px 0;

  @media (max-width: 767px) {
    padding: 10px 0 40px 0;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 20px 0 40px 0;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 30px 0 65px 0;
  }

  @media (min-width: 1200px) and (max-width: 1399px) {
    padding: 50px 0 60px 0;
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

  .all {
    color: ${colors.red};
    font-family: ${polices.aboutFont};
  }

  .game {
    color: ${colors.violet};
    font-family: ${polices.aboutFont};
  }

  @media (max-width: 479px) {
    font-size: 24px;
    line-height: 34px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 30px;
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

const CoverContainer = styled.div`
  position: relative;

  @media (max-width: 991px) {
    right: 0;
    margin-top: 30px;
  }
`

function Features() {
  return (
    <React.Fragment>
      <section id="features">
        <Container className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <Title>
                HERE IS <span className="all">ALL NEW</span>
                <span className="game"> GAME</span> FEATURES
              </Title>
              <Paragraph between>
                New features are now a vailable for Mega 2019 so one can easily
                play the game more smoothly gue and tema sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </Paragraph>
              <Paragraph>
                Easy <strong>Active Touch System</strong>, New 50/50{' '}
                <strong>Batels, Dynamic Tactics, Timed Finished</strong> which
                makes the play Mega 2019 more fantasy sit aspernatur aut odit
                aut fugit, sed quia.
              </Paragraph>
            </div>

            <div className="col">
              <CoverContainer>
                <img
                  src={allCover.featuresCover}
                  alt="about"
                  className="w-100"
                />
              </CoverContainer>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Features
