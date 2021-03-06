import React from "react"
import styled from "styled-components"
import Image from './image'
import Waves from './waves'

const HomeContainer = styled.div`
  width: 100%;
  height: 90vh;
  /* margin-top:30px; */
  /* background: linear-gradient(#5b43d6, #6610f2); */
  background-color: #5b43d6;
  border-radius: 0 0 15% 15%;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  color: white;
  position: relative;
  /* z-index: 1; */
  @media screen and (max-width: 480px){
    &{
      margin-top: 0;
    }
  }
`
const Img = styled.div`
  width: 250px;
  height: 250px;
  /* #EEE7E1 */
  /* #ACACAC */
  background: linear-gradient(90deg, #ACACAC, #EEE7E1);
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
  overflow: hidden; 

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const Parrafo = styled.p`
  font-size: 32px;
  line-height: 40px;
  @media screen and (max-width: 480px){
    font-size: 23px;
    line-height: 35px;
  }
`

const Home = () => {
  return (
    <HomeContainer>
      <Container>
      <Img>
      <Image name="placeholderImage"/>
      </Img>
      <Parrafo>
        ¡Hola! Soy <strong>Jackson Zambrano</strong> <br/>
        desarrollador <strong>Frontend</strong> con<br/>
        pasión por la tecnología. <br/>
      </Parrafo>
      </Container>
      <Waves/>
    </HomeContainer>
  )
}

export default Home
