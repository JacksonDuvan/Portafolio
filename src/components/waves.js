import React from 'react'
import styled, { keyframes } from 'styled-components'
import wavea from '../images/wavesa.png'
import waveb from '../images/wavesb.png'
import wavec from '../images/wavesc.png'

const wavesA = keyframes`
  0%{
    bottom: -40px;
    right: 5px; 
  }
  50%{
    bottom: -30px;
    right: 0px;
  }
  100%{
    bottom: -40px;
    right: 5px; 
  }
`
const wavesB = keyframes`
  0%{
    bottom: -60px;
  }
  50%{
    bottom: -23px;
  }
  100%{
    bottom: -60px; 
  }
`

const wavesC = keyframes`
  0%{
    bottom: -50px;
    right: 10px; 
  }
  50%{
    bottom: -25px;
    right: 0px;
  }
  100%{
    bottom: -50px;
    right: 10px; 
  }
`
const ImgA = styled.img`
  max-width: 145%;
  /* height:300px; */
  position: absolute;
  bottom: -10px;
  margin: 0;
  right: 0;
  animation: ${wavesA} 2.5s infinite;
`

const ImgB = styled.img`
  max-width: 100%;
  /* height:300px; */
  position: absolute;
  bottom: -10px;
  margin: 0;
  animation: ${wavesB} 2.5s infinite;
`

const ImgC = styled.img`
  max-width: 100%;
  /* height:300px; */
  position: absolute;
  bottom: -10px;
  margin: 0;
  animation: ${wavesC} 2.5s infinite;
`

const Waves = () => {
    return(
        <>
            <ImgA src={wavea}  alt="wavea"/>
            <ImgB src={waveb} alt="waveb"/>
            <ImgC src={wavec} alt="wavec"/>
        </>
    )
}

export default Waves