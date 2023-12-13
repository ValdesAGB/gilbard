import React from 'react'
import { download } from '../data'
import styled, { keyframes } from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const goRight = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(30px);
  }

  100% {
    transform: translateX(0px);
  }

`

const goLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-30px);
  }

  100% {
    transform: translateX(0px);
  }

`

const Container = styled.div`
  position: relative;
  top: -80px;
`

const Content = styled.div`
  display: flex;
  -webkit-box-align: center;

  align-items: center;
  position: relative;

  justify-content: space-around;
  z-index: 10;

  h3 {
    font-size: 40px;
    line-height: 45px;
    margin-bottom: 0;
    font-family: ${polices.aboutFont};
    color: ${colors.aboutColor};
    font-weight: 400;
    margin-top: 0;

    span {
      color: ${colors.violet};
    }
  }

  ul {
    list-style: outside none none;
    margin: 0;
    padding: 0;
  }
`

const ListContent = styled.li`
  margin-bottom: 40px;

  margin-left: ${(props) =>
    props.id === 2 ? '30px' : props.id === 3 ? '120px' : null};

  a {
    font-size: 36px;
    line-height: 45px;
    position: relative;
    display: inline-block;
    font-family: ${polices.aboutFont};
    transition: all 0.5s ease-in-out;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${colors.downloadListAfterAndBeforeColor};
      z-index: 99;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
      right: 0;
    }

    &:hover {
      color: ${colors.violet};
      &::before {
        animation: ${goRight} 0.8s cubic-bezier(0.8, 0.81, 0, 0.05) infinite;
      }
      &::after {
        animation: ${goLeft} 0.8s cubic-bezier(0.8, 0.81, 0, 0.05) infinite;
      }
    }
  }
`

function Download() {
  return (
    <React.Fragment>
      <section>
        <Container>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <Content>
                  <h3>
                    <span>DOWNLOAD</span> DEMO <br /> MEGA 2019 FOR...
                  </h3>
                  <ul>
                    {download.map(({ id, name }) => (
                      <ListContent id={id} key={id}>
                        <a href="#">{name}</a>
                      </ListContent>
                    ))}
                  </ul>
                </Content>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Download
