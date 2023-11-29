import React from 'react'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Title = styled.h3`
  font-family: ${polices.aboutFont}!important;
  color: ${colors.aboutColor};
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 15px;
  font-size: 38px;
  line-height: 45px;
  letter-spacing: 1px;

  .all {
    color: ${colors.red};
  }

  .game {
    color: ${colors.violet};
  }
`

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 28px;
  margin-bottom: ${(props) => (props.between ? '20px' : 0)};
  max-width: 530px;
`

function Features() {
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
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
              <img
                src="https://template.hasthemes.com/gilbard/gilbard/assets/images/feature/feature-1.png"
                alt="about"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Features
