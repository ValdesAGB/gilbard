import React, { useState } from 'react'
import styled from 'styled-components'
import { galleryCover } from '../data'

const CoverContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
const Cover = styled.img`
  width: 100%;
  cursor: pointer;
`

function GalleryGrids() {
  const [cover, setCover] = useState(null)

  return (
    <React.Fragment>
      <CoverContainer>
        {galleryCover.map(({ id, src }) => (
          <Cover
            key={id}
            data-bs-toggle="modal"
            data-bs-target="#modal"
            src={src}
            alt={id}
            onClick={(e) => setCover({ id, src })}
          />
        ))}

        <div
          className="modal fade"
          id="modal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-centered">
            <img src={cover && cover.src} alt={cover && cover.id} />
          </div>
        </div>
      </CoverContainer>
    </React.Fragment>
  )
}

export default GalleryGrids
