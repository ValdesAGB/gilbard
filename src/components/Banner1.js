import React from 'react'
import { allBanner } from '../data'

function Banner1() {
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="row">
            <img src={allBanner.banner1} alt="banner1" className="w-100" />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Banner1
