import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled, { css, keyframes } from "styled-components"
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { useHandlerScroll } from '../hooks/useHandlerScroll'
import logoJZ from '../images/{JacksonZambrano}.png'

const animateTop = keyframes`
  to{
    height: 70px;
  }from{
    height: 80px;
  }
`
const animateButton = keyframes`
  to{
    height: 80px;
  }from{
    height: 70px;
  }
`
const animateTopMenu = keyframes`
  to{
    height: 50px;
  }from{
    height: 60px;
  }
`
const animateButtonMenu = keyframes`
  to{
    height: 60px;
  }from{
    height: 50px;
  }
`

const NavBar = styled.header`
  width: 100%;
  background-color: #5b43d6;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  z-index:1;
  box-shadow: ${props => props.scroll ? '0 0 3px #000': 'none'};
`

const Menu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  a {
    text-decoration: none;
    font-size: 16px;
    color: white;
    font-weight: bold;
    margin: 0 15px;
    @media screen and (max-width: 800px){
      &{
        margin: 20px 15px;
      }
    }
  }
  a:hover {
    color: #ffcb05;
  }
  @media screen and (max-width: 800px) {
    & {
      background-color: #5b43d6;
      flex-direction: column;
      box-shadow: 0px 3px 3px rgba(0,0,0, .3);
      width: 100%;
      position: fixed;
      z-index: 0;
      top: 50px;
      transition: .5s;
      left: ${props => props.menu ? 0 : '-1000px'};
    }
  }
`

const HeaderMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index:3;
  animation: ${props => props.scroll ? css`${animateTop} 1s` : css`${animateButton} 1s`};
  height: ${props => props.scroll ? '70px': '80px'};
  svg {
    position: absolute;
    bottom: 100px;
    transition: .5s;
    @media screen and (max-width: 800px){
      &{
        position: relative;
        bottom: 0;
      }
    }
  }
  @media screen and (max-width: 800px){
    &{
      animation: ${props => props.scroll ? css`${animateTopMenu} 1s` : css`${animateButtonMenu} 1s`};
      height: ${props => props.scroll ? '50px': '60px'};
    }
  }
`

const IMG = styled.img`
  margin-top: 25px;
  width: 250px;
  @media screen and (max-width: 800px){
    &{
    margin-top: 25px;
     width: 300px;
  }
  @media screen and (max-width: 500px){
    &{
    margin-top: 25px;
     width: 210px;
  }
`


const Header = ({ siteTitle }) => {
  const { scroll } = useHandlerScroll()
  const [menu, setMenu] = useState(false)
    
  return(
      <NavBar scroll={scroll}>
        <HeaderMenu scroll={scroll}>
          <Link to="/" ><IMG src={logoJZ} alt="logoJZ"/> </Link>
          
          {
            menu 
              ? <MdClose color='white' size='28px' onClick={() => setMenu(!menu)}/>
              : <GiHamburgerMenu color='white' size='25px' onClick={() => setMenu(!menu)}/>
          }
          <Menu scroll={scroll} menu={menu}>
              <a href="#habilidades" onClick={() => setMenu(false)}>HABILIDADES</a>
              <a href="#portafolio" onClick={() => setMenu(false)}>PORTAFOLIO</a>
              <a href="#formacion" onClick={() => setMenu(false)}>FORMACIÓN</a>
          </Menu>
        </HeaderMenu>
      </NavBar>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
