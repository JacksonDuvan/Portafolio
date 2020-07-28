import React from 'react'
import styled from 'styled-components'
import Image from './image'

const SkillsContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 40px;
    background-color: white;
    @media screen and (max-width: 480px){
        &{
            height: 80vh;
        }
    }
`

const H2 = styled.h2`
    text-align: center;
    margin-top: 50px;
    color: #a9a9a9;
    z-index: 4;
    @media screen and (max-width: 480px){
        margin-top: 30px;
    }
    @media screen and (max-width: 360px){
        margin-top: 30px;
    }
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: repeat(2, 200px);
    grid-column-gap: 20px;
    margin: 50px auto 0;
    justify-content: center;
    @media screen and (max-width: 800px){
        &{
            display: grid;
            grid-template-columns: repeat(3, 120px);
            grid-template-rows: repeat(3, 120px);
        }
    }
    @media screen and (max-width: 500px){
        &{
            display: grid;
            grid-template-columns: repeat(3, 85px);
            grid-template-rows: repeat(3, 100px);
        }
    }
    @media screen and (max-width: 360px){
        &{
            display: grid;
            grid-template-columns: repeat(3, 85px);
            grid-template-rows: repeat(3, 100px);
        }
    }
`

const Icon = styled.div`
    margin: auto 0;
`
const Skills = () => {
    return(
        <SkillsContainer id="habilidades">
            <H2>HABILIDADES</H2>
            <Grid>
                <Icon><Image name="html"/></Icon>
                <Icon><Image name="css"/></Icon>
                <Icon><Image name="javascript"/></Icon>
                <Icon><Image name="sass"/></Icon>
                <Icon><Image name="git"/></Icon>
                <Icon><Image name="react"/></Icon>
                <Icon><Image name="reduxIcon"/></Icon>
                <Icon><Image name="gatsby"/></Icon>
            </Grid>
        </SkillsContainer>
    )
}

export default Skills