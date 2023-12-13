import React from 'react'
import { footerMenu, logo, networks } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const Container = styled.div`
  padding: 80px 10px;
  background-color: ${colors.violet};
  tex-align: center;
`

const Menu = styled.div`
  ul {
    list-style: outside none none;
    text-align: center;
    margin: 0;
    padding: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  a {
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
    display: block;
    font-family: 'Nova Round', cursive;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
      color: ${colors.red};
    }
  }
`

const List = styled.li`
  display: inline-block;
  margin-right: ${(props) => (props.ids !== 4 ? '50px' : '0px')};
`

const Networks = styled.div`
  span {
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
    font-family: 'Nova Round', cursive;
    margin-right: 30px;
  }

  ul {
    display: inline-block;
    list-style: outside none none;
    margin: 0;
    padding: 0;
  }

  a {
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
    display: block;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
      color: ${colors.red};
    }
  }
`

const NetworksList = styled.li`
  display: inline-block;
  margin-right: ${(props) => (props.ids !== 4 ? '40px' : '0px')};
`

const Copyright = styled.div`
  background-color: ${colors.violet};
  padding-top: 20px;
  padding-bottom: 25px;
  border-top: 1px solid #5e6bb7;
  display: block;
  text-align: center !important;
  border-top: solid 1px white;
  p {
    font-size: 18px;
    line-height: 30px;
    font-weight: 300;
    color: #c4c2c2;

    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center !important;
  }
`

function Footer() {
  const date = new Date()

  return (
    <React.Fragment>
      <footer>
        <Container className="row">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col text-center">
                <a href="#">
                  <img src={logo.white} alt="logo" />
                </a>
              </div>

              <Menu className="col-6 text-center">
                <ul>
                  {footerMenu.map(({ id, menu }) => (
                    <List key={id} ids={id}>
                      <a href="#">{menu}</a>
                    </List>
                  ))}
                </ul>
              </Menu>
              <Networks className="col-4 text-center">
                <span>follow us:</span>
                <ul>
                  {networks.map(({ id, icone }) => (
                    <NetworksList key={id} ids={id}>
                      <a href="#">
                        <i className={`bi ${icone}`} />
                      </a>
                    </NetworksList>
                  ))}
                </ul>
              </Networks>
            </div>
          </div>
        </Container>
        <Copyright className="row">
          <p>Copyright ©{date.getFullYear()} WebGrowth. All rights reserved.</p>
        </Copyright>
      </footer>
    </React.Fragment>
  )
}

export default Footer
