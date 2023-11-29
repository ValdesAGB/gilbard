import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const Input = styled.input`
  font-size: 18px;
  line-height: 40px;
  height: 40px;
  color: ${colors.newslatersColor};
  border: none;
  border-bottom: 1px solid ${colors.violet};
  width: 100%;
  background-color: transparent;
  transition: all 0.3s ease 0s;
`

function NewslettersForm() {
  return (
    <React.Fragment>
      <section>
        <div>
          <Input
            type="email"
            className="form-control"
            id="mail"
            placeholder="Enter your email here"
          />
        </div>
      </section>
    </React.Fragment>
  )
}

export default NewslettersForm
