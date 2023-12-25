import React from 'react'
import { allCover, testimonial } from '../data'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Container = styled.div`
  padding: 105px 0 75px 0;
`

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

const TestimonialContainer = styled.div`
cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  text-align: center;
  
  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }

  &::before {
    display: block;
    content: url(${allCover.testimonialCover});
    opacity: 1;
    line-height: 1;
    margin-bottom: 20px;
  }

  @media (max-width:575px){
    padding : 0 50px;
  }

  @media (min-width:576px) and (max-width:767px){
    padding : 0 40px;
  }

  @media (min-width:768px) and (max-width:991px){
    padding : 0 50px;
  }

 




  p {
    font-size: 18px;
    font-style: italic;
    line-height: 28px;
    max-width: 670px;
    margin: 0 auto;
    margin-bottom: 25px;

    @media (max-width:767px){
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 15px;
    }
  }



  h4 {
    font-size: 20px;
    color: ${colors.red};
    margin-bottom: 8px;
    font-family: ${polices.main};
    font-style: italic;
    font-weight: 400;
    margin-top: 0;
    line-height: 1.2;
  }



  span{
    font-size: 18px;
    line-height: 30px;
    display: block;
    color: ${colors.main};
    font-style: italic;
    transition: all 0.3s ease 0s;
  }
}
`

function Testimonial() {
  return (
    <React.Fragment>
      <section>
        <Container className="container">
          <div>
            <Slider {...settings}>
              {testimonial.map(({ id, name, post }) => (
                <TestimonialContainer id={id} key={id}>
                  <p>
                    New features are now a vailable for Mega 2019 so one can
                    easily play the game more smoothly gue and tema sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione
                  </p>

                  <h4>{name}</h4>

                  <span>{post}</span>
                </TestimonialContainer>
              ))}
            </Slider>
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Testimonial
/** <div>
                  <img src={allCover.testimonialCover} alt="testimonial" />{' '}
                </div> */
