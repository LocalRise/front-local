import React from "react"
import styled from "styled-components"

const TextLogo = styled.div`
  & > span {
    font-family: PeaceSans;
    font-size: ${props => (props.size ? props.size : "17.5px")};
    line-height: 0.91;
    text-align: left;
    color: #31a98b;
  }
  & > span:nth-child(2) {
    color: #f5be41;
  }
  & > span:nth-child(3) {
    color: #f46b1d;
  }
`

const LogoText = props => {
  return (
    <TextLogo {...props}>
      <span>FRESH</span>
      <span>
        2<br />
      </span>
      <span>HOME</span>
    </TextLogo>
  )
}

export default LogoText