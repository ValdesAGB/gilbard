import React from 'react'
import { footerMenu, logo, networks } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const Container = styled.div`
  padding: 80px 0;
  background-color: ${colors.violet};
  tex-align: center;

  @media (max-width: 767px) {
    padding: 40px 0;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 50px 0 15px 0;
  }
`

const LogoContainer = styled.div`
  text-align: center;
`

const Menu = styled.div`
  ul {
    list-style: outside none none;
    text-align: center;
    margin: 0;
    padding: 0;

    @media (max-width: 767px) {
      margin: 30px 0;
    }
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

  @media (max-width: 767px) {
    margin-right: ${(props) => (props.ids !== 4 ? '10px' : '0px')};
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    margin-right: ${(props) => (props.ids !== 4 ? '30px' : '0px')};
  }
`

const Networks = styled.div`
  text-align: center;

  @media (min-width: 768px) and (max-width: 991px) {
    margin: 30px 0;
  }

  span {
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
    font-family: 'Nova Round', cursive;
    margin-right: 30px;

    @media (max-width: 767px) {
      margin-right: 0px;
      margin-bottom: 10px;
      display: block;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      margin-right: 10px;
    }
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

  @media (min-width: 992px) and (max-width: 1199px) {
    margin-right: ${(props) => (props.ids !== 4 ? '20px' : '0px')};
  }
`

const Copyright = styled.div`
  background-color: ${colors.violet};
  padding-top: 20px;
  padding-bottom: 25px;
  border-top: 1px solid #5e6bb7;
  display: block;
  text-align: center !important;
  border-top: solid 1px white;

  @media (max-width: 767px) {
    padding: 15px 0;
  }

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
          <div>
            <div className="container">
              <div className="row align-items-center ">
                <LogoContainer className="col-12 col-md-3 col-lg-2 col-xl-3">
                  <a href="#">
                    <img src={logo.white} alt="logo" />
                  </a>
                </LogoContainer>

                <Menu className="col-12 col-md-9 col-lg-6 col-xl-6">
                  <ul>
                    {footerMenu.map(({ id, menu }) => (
                      <List key={id} ids={id}>
                        <a href="#">{menu}</a>
                      </List>
                    ))}
                  </ul>
                </Menu>

                <Networks className="col-12 col-md-12 col-lg-4 col-xl-3">
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
