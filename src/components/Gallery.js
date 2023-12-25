import React from 'react'
import GalleryGrids from './GalleryGrids'
import GalleryVideo from './GalleryVideo'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 115px;

  @media (max-width: 767px) {
    padding-top: 95px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-top: 105px;
  }

  .col-lg-7,
  .col-lg {
    padding: 0;
  }
`

function Gallery() {
  return (
    <React.Fragment>
      <section id="gallery">
        <Container>
          <div className="row align-items-center">
            <div className="col-12 col-lg-7 order-2 order-lg-1">
              <GalleryVideo />
            </div>
            <div className="col-lg order-1 order-lg-2">
              <GalleryGrids />
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Gallery
