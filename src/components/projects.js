import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Image from './image'


const Project = styled.div`
    width:90%;
    display: flex;
    justify-content: space-evenly;
    margin: 140px 0;
    @media screen and (max-width: 1000px){
        &{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin: 100px 0;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }
    @media screen and (max-width: 480px){
     &{
         margin: 50px 0;
     }
    @media screen and (max-width: 360px){
     &{
         margin: 50px 0;
     }
  }
`
const Img = styled.div`
 width:500px;
 margin-top: 20px;
 @media screen and (max-width: 800px){
     &{
         width: 400px;
     }
 }
 @media screen and (max-width: 360px){
     &{
         width: 310px;
     }
 }
`

const ContainerProject = styled.div`
    margin-top: 20px;
    width: 300px;
    margin: auto 0;
    padding: 0 -50px;
    p{
        color: gray;
        font-size: 15px;
    }
`

const A = styled.a`
    margin: 20px 15px 20px 0;
    color: #007bff;
    border: 1px solid #007bff;
    padding: 10px 20px;
    border-radius: 50px;
    &:hover{
        background-color: #007bff;
        color: white;
    }
    pointer-events: ${props => props.project ? css`none` : ''}
`

   

const Projects = ({ title, description, project, github, name, tech, note }) => {
    const [projectLength, setProject] = useState(false)
    const lengthProject = () => {
        if(project.length === 0){
        setProject(true)
        }else{
        setProject(false)
        }
    }
    useEffect(() => {
       lengthProject()
    })


    return(
        <Project>
                <Img>
                <Image name={name}/>
                </Img>
            
            <ContainerProject>
                    <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>{note}</p>
                        <p>{tech}</p>
                    </div>
                    <div>
                        <A href={github} target="__blank">GitHub</A>
                        <A href={project} target="__blank" project={projectLength}>Abrir App</A>
                    </div>
            </ContainerProject>
        </Project>
    )
}

export default Projects
