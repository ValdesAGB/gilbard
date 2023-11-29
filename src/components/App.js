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
      <div className="row">
        <About />
        <Features />
        <Banner1 />
        <Installation />
        <Newsletters />
        <Testimonial />
      </div>
    </React.Fragment>
  )
}

export default App
