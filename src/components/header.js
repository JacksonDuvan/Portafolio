import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled, { css, keyframes } from "styled-components"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useHandlerScroll } from '../hooks/useHandlerScroll'
import { useHandlerScreen } from '../hooks/useHandlerScreen'

const animateTop = keyframes`
  to{
    margin: 20px 15px;
  }from{
    margin: 30px 15px;
  }
`
const animateButton = keyframes`
  to{
    margin: 30px 15px;
  }from{
    margin: 20px 15px;
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
  top: 0;
  z-index:1;
  box-shadow: ${props => props.scroll ? '0 0 3px #000': 'none'};
  @media screen and (max-width: 800px) {
    & {
      flex-direction: column;
      justify-content: center;
    }
  }
`
const H1 = styled.h1`
  margin: 0;
  margin-bottom: 5px;
  font-size: 30px;
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 480px){
    &{
      font-size: 20px;
    }
  }
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
    animation: ${props => props.scroll ? css`${animateTop} 1s` : css`${animateButton} 1s`};
    margin: ${props => props.scroll ? '20px 15px': '30px 15px'};
  }
  a:hover {
    color: #ffcb05;
  }
  @media screen and (max-width: 800px) {
    & {
      flex-direction: column;
      justify-content: center;
      opacity: 0;
    }
  }
`

const HeaderMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  animation: ${props => props.scroll ? css`${animateTopMenu} 1s` : css`${animateButtonMenu} 1s`};
  height: ${props => props.scroll ? '50px': '60px'};
`
const fadeIn = keyframes`
  0%{
    height: 0; 
    opacity: 0;
  }100%{
    height: 200px; 
    opacity: 1;
  }
`

const MenuBurger = styled.div`
  background-color: #5b43d6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  margin-top: 120px;
  right: 0;
  left:0;
  height: 200px;
  animation:  ${fadeIn} 500ms;
  a{
    color: white;
  }
`

const Header = ({ siteTitle }) => {

  const { scroll } = useHandlerScroll()
  const { screen, menu, setMenu } = useHandlerScreen()
  
  if(screen){
    return(
      <NavBar scroll={scroll}>
      <HeaderMenu scroll={scroll}>
       <H1>
          <Link to="/" >{siteTitle}</Link>
          </H1>
          <GiHamburgerMenu color='white' size='25px' onClick={() => setMenu(!menu)}/>
          {
            menu &&  <MenuBurger scroll={scroll} menu={menu}>
              <a href="#habilidades" onClick={() => setMenu(false)}>HABILIDADES</a>
              <a href="#portafolio" onClick={() => setMenu(false)}>PORTAFOLIO</a>
              <a href="#formacion" onClick={() => setMenu(false)}>FORMACIÓN</a>
          </MenuBurger>
          } 
        </HeaderMenu>
      </NavBar>
    )
  }else{
    return(
      <NavBar scroll={scroll}>
      <H1>
          <Link to="/" >{siteTitle}</Link>
          </H1>
          <Menu scroll={scroll}>
              <a href="#habilidades">HABILIDADES</a>
              <a href="#portafolio">PORTAFOLIO</a>
              <a href="#formacion">FORMACIÓN</a>
          </Menu>
      </NavBar>
    )
  }

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
