import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { logo, menu } from '../data'
import { colors } from '../untils/colors'
import { ClickContext, HeaderContext } from '../untils/context'

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
`

const MenuContainer = styled.ul`
  list-style: outside none none;
  margin: 0;
  padding: 0;
  display: flex;
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
  font-family: 'Nova Round', cursive;
  color: #ffffff;
  display: block;
  position: relative;
  text-transform: capitalize;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) => props.id === 6 && '#061da4'};

  .nav-pills {
    --bs-nav-pills-link-active-bg: transparent;
  }

  .navbar-nav .nav-link.active,
  .navbar-nav .nav-link.show {
    color: ${colors.red};
  }

  &:hover {
    color: ${(props) => (props.id !== 6 ? colors.red : 'white')};
    background-color: ${(props) => props.id === 6 && colors.red};
  }

  &:focus {
    color: ${(props) => (props.id !== 6 ? colors.red : 'white')};
  }
`

function Navbar() {
  const { onTop } = useContext(HeaderContext)

  const Header = styled.header`
    position: fixed;
    z-index: 999;
    padding: 30px 0;
    width: 100%;
    top: 0;

    animation: ${slideDownAnimation} 0.8s ease-in-out;
    background-color: ${onTop ? 'transparent' : '#081b1f'};
  `
  const { handleClick } = useContext(ClickContext)

  return (
    <React.Fragment>
      <Header className="row">
        <div>
          <div className="container">
            <nav className="navbar navbar-expand-lg row ">
              <div className="container-fluid">
                <a className="navbar-brand col-3 align-items-center" href="#">
                  <img src={logo.white} alt="logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse nav-pills d-flex col-9 align-items-center justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ContainerMenu>
                    <MenuContainer className="navbar-nav me-auto mb-2 mb-lg-0">
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
