import React from 'react'
import { allBanner } from '../data'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0;
`

function Banner1() {
  return (
    <React.Fragment>
      <section>
        <Container className="container">
          <div className="row">
            <img src={allBanner.banner1} alt="banner1" className="w-100" />
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Banner1
