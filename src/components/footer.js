import React from "react"
import styled from 'styled-components'
import { FaLinkedin } from 'react-icons/fa'
import {GrInstagram, GrGithub} from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, .02);
  position: relative;
  padding: 50px 0;
  bottom: 0;
`
const H2 = styled.h2`
    text-align: center;
    color: #a9a9a9;
`
const Icons = styled.div`
  text-align: center;
`
const Ancla = styled.a`
  color: #a9a9a9;
  margin: 0 15px;
  cursor: pointer;
  &:hover{
    color: #747474;
  }
`

const Footer = () => {
  return (
  <FooterContainer>
    <H2>CONTÁCTAME</H2>
    <Icons>
      <Ancla href="https://www.linkedin.com/in/jackson-zambrano-a21362171/" target="__black"><FaLinkedin size='30px' /></Ancla>
      <Ancla href="https://github.com/JacksonDuvan" target="__black"><GrGithub size='30px' /></Ancla>
      <Ancla href="mailto:jzambranogarzon@gmail.com" ><MdEmail size='30px' /></Ancla>
      <Ancla href="https://www.instagram.com/jackson_zambrano99/?hl=es-la" target="__black"><GrInstagram size='30px' /></Ancla>
    </Icons>
  </FooterContainer>
  )
}

export default Footer
