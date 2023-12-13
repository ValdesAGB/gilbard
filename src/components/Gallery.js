import React from 'react'
import GalleryGrids from './GalleryGrids'
import GalleryVideo from './GalleryVideo'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 115px;
  .col-7,
  .col {
    padding: 0;
  }
`

function Gallery() {
  return (
    <React.Fragment>
      <section id="gallery">
        <Container>
          <div className="row align-items-center">
            <div className="col-7">
              <GalleryVideo />
            </div>
            <div className="col">
              <GalleryGrids />
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Gallery
