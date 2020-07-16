import React from 'react'
import styled from 'styled-components'
import Projects from './projects'
import { DataProject } from '../projects'

const Div = styled.div`
    width: 100%;
    padding-top: 10px;
    background-color: white;
`

const H2 = styled.h2`
    text-align: center;
    margin-top: 100px;
    color: #a9a9a9;
    @media screen and (max-width: 480px){
        margin-top: 30px;
    }
    @media screen and (max-width: 360px){
        margin-top: 30px;
    }
`
const Hr = styled.hr`
    width: 100%;
    margin: 0;
`


const Briefcase = () => {
    return(
        <Div id="portafolio">
            <H2 >PORTAFOLIO</H2>
            {
                DataProject.map(data => (
                    <Projects 
                        key={data.id} 
                        title={data.title}
                        description={data.description}
                        project={data.project}
                        github={data.github}
                        name={data.name}
                        tech={data.tech}
                    />
                ))
            }
            <Hr/>
        </Div>
    )
}

export default Briefcase