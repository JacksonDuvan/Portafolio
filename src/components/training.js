import React from 'react'
import styled from 'styled-components'
import Image from '../components/image'
import Fade from 'react-reveal/Fade'

const TrainingContainer = styled.div`
    background-color: #5b43d6;
    /* scroll-snap-align: left; */
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding-top: 100px ; */
    @media screen and (max-width: 480px){
        &{
            height: calc(100vh - 50px);
        }
    }
`

const Certificados = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: repeat(6, 400px);
    grid-column-gap: 40px;
    overflow-x: scroll;
     scroll-snap-type: x mandatory;
    overscroll-behavior-x: contain;
    padding: 5px 0;
    &::-webkit-scrollbar{
        /* width: 2px; */
        height: 8px;
    }
    &::-webkit-scrollbar-thumb{
        background: #ccc;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover{
        background: #b3b3b3;
        border-radius: 4px;
    }
    @media screen and (max-width: 800px){
        &{
            width: 90%;
            grid-column-gap: 5px;
        }
    }
    @media screen and (max-width: 360px){
        &{
            grid-template-columns: repeat(6, 300px);
        }
    }
    a:hover{
        transform: scale(1.02);
    }
` 

const ImageContainer = styled.div`
    scroll-snap-align: center; 
`

const H2 = styled.h2`
    text-align: center;
    color: white;
    /* padding-top: 50px; */
`
const Ancla = styled.a`
    margin-top: 30px;
    text-align: center;
    text-decoration: none;
    color: white;
    border: 1px solid white;
    padding: 10px 20px;
    border-radius: 50px;
    cursor:pointer;
    &:hover{
        text-decoration: underline;
        color: white;
        transform: scale(1.02)
    }
`

const Training = () => {
    return(
        <TrainingContainer id="formacion">
            <H2>FORMACIÓN</H2>
            <Certificados>
                <ImageContainer>
                    <a 
                        href="https://platzi.com/@jakson-duvan-zambrano/ruta/100-escuela-javascript/diploma/detalle/" target="__blank">
                        <Image name="carrera" />
                    </a>
                </ImageContainer>
                <ImageContainer>
                    <a href="https://platzi.com/@jakson-duvan-zambrano/curso/1640-frontend-developer/diploma/detalle/" target="__blank">
                        <Image name="frontend" />
                    </a>
                </ImageContainer> 
                <ImageContainer>
                    <a href="https://platzi.com/@jakson-duvan-zambrano/curso/1642-javascript-profesional/diploma/detalle/" target="__blank">
                        <Image name="profesional" />
                    </a>
                </ImageContainer> 
                <ImageContainer>
                    <a href="https://platzi.com/@jakson-duvan-zambrano/curso/1548-react/diploma/detalle/" target="__blank">
                        <Image name="reactCurso" />
                    </a>
                </ImageContainer>
                <ImageContainer>
                    <a href="https://platzi.com/@jakson-duvan-zambrano/curso/1350-html5-css3/diploma/detalle/" target="__blank">
                        <Image name="web" />
                    </a>
                </ImageContainer>
                <ImageContainer>
                    <a href="https://platzi.com/@jakson-duvan-zambrano/curso/1689-backend-js/diploma/detalle/" target="__blank">
                        <Image name="node" />
                    </a>
                </ImageContainer>
            </Certificados> 
            <Ancla href="https://platzi.com/@jakson-duvan-zambrano/" target="__black">Ver perfil de Platzi</Ancla>
        </TrainingContainer>
    )
}

export default Training