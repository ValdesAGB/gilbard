import React from 'react'
import About from './About'
import { createGlobalStyle } from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'
import Features from './Features'
import Banner1 from './Banner1'
import Installation from './Installation'
import Newsletters from './Newsletters'
import Testimonial from './Testimonial'
import Home from './Home'
import Download from './Download'
import Gallery from './Gallery'
import Footer from './Footer'
import Navbar from './Navbar'
import { ClickProvider, HeaderProvider } from '../untils/context'

const GlobalStyle = createGlobalStyle`
*{
  font-style: normal;
    font-weight: normal;
    visibility: visible;
    font-family:${polices.main};
    color: ${colors.main};
}
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ClickProvider>
        <HeaderProvider>
          <Navbar />
          <div
            className="row scrollspy-example"
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="false"
            tabIndex="0"
          >
            <Home />
            <Download />
            <About />
            <Features />
            <Banner1 />
            <Gallery />
            <Installation />
            <Newsletters />
            <Testimonial />
            <Footer />
          </div>
        </HeaderProvider>
      </ClickProvider>
    </React.Fragment>
  )
}

export default App
