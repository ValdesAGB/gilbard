import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { logo, menu } from '../data'
import { colors } from '../untils/colors'
import { ClickContext, HeaderContext } from '../untils/context'
import { polices } from '../untils/polices'

const slideDownAnimation = keyframes`
from {
  transform: translateY(-100%);
}
to {
  transform: translateY(0);
}
`

const ContainerMenu = styled.div`
  display: block;

  @media (max-width: 1199px) {
    padding: 10px;
    margin-top: 20px;
    background-color: ${colors.navbarBgColor};
  }
`

const MenuContainer = styled.ul`
  list-style: outside none none;
  margin-right: auto;
  margin-bottom: 8px;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`

const MenuItems = styled.li`
  position: relative;
  display: list-item;
  text-align: -webkit-match-parent;
  margin-right: ${(props) => (props.id === 6 ? '0' : '40px')};
`

const MenuLinks = styled.a`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.25px;
  font-family: ${polices.aboutFont};
  color: ${colors.installationBuyBtnColor};
  display: block;
  position: relative;
  text-transform: capitalize;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) => props.id === 6 && colors.violet};

  &:hover {
    color: ${(props) => (props.id !== 6 ? colors.red : 'white')};
    background-color: ${(props) => props.id === 6 && colors.red};
  }

  &:focus {
    color: ${(props) => (props.id !== 6 ? colors.red : 'white')};
  }

  @media (max-width: 1199px) {
    text-align: ${(props) => props.id === 6 && 'center'};
  }
`

function Navbar() {
  const { handleClick } = useContext(ClickContext)
  const { onTop } = useContext(HeaderContext)

  const Header = styled.header`
    position: fixed;
    z-index: 999;
    padding: 30px 0;
    width: 100%;
    top: 0;

    animation: ${slideDownAnimation} 0.8s ease-in-out;
    background-color: ${onTop ? 'transparent' : colors.navbarBgColor};
  `

  const ToogleBtn = styled.button`
    border: none;
    i {
      font-size: 2rem;
      color: white;
    }
  `

  return (
    <React.Fragment>
      <Header className="row">
        <div>
          <div className="container">
            <nav className="navbar navbar-expand-xl">
              <div className="container-fluid">
                <a className="navbar-brand col-3 align-items-center" href="#">
                  <img src={logo.white} alt="logo" />
                </a>
                <ToogleBtn
                  className="navbar-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="bi bi-list" />
                </ToogleBtn>
                <div
                  className="collapse navbar-collapse col-9 align-items-center justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ContainerMenu>
                    <MenuContainer className=" navbar-nav">
                      {menu.map(({ id, name, link }) => (
                        <MenuItems className="nav-item" key={id} id={id}>
                          <MenuLinks
                            id={id}
                            className="nav-link"
                            href={link}
                            onClick={(e) => handleClick(e, name, link)}
                          >
                            {name}
                          </MenuLinks>
                        </MenuItems>
                      ))}
                    </MenuContainer>
                  </ContainerMenu>
                </div>
              </div>
            </nav>{' '}
          </div>{' '}
        </div>
      </Header>
    </React.Fragment>
  )
}

export default Navbar
