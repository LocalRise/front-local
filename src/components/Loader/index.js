import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
const LoaderStyled = styled.div`
  border-top-color: #3498db;
  animation: ${spinner} 1.5s linear infinite;
`

const Loader = () => {
  return (
    <LoaderStyled class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></LoaderStyled>
  )
}

export default Loader
