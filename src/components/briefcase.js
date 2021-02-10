import React, { useState } from 'react'
import styled from 'styled-components'
import Projects from './projects'
import { DataProject } from '../projects'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

const Div = styled.div`
    width: 100%;
    /* padding-top: 10px; */
    background-color: white;
`

const H2 = styled.h2`
    text-align: center;
    padding-top: 50px;
    color: #a9a9a9;
`
const Hr = styled.hr`
    width: 100%;
    margin: 0;
`
const Button = styled.button`
    background-color: transparent;
    outline: none;
    color: #fff;
    border: 1px solid #007bff;
    background-color: #007bff;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #0077f7;
    }
`

const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: -50px;
    margin-bottom: 70px;
    @media screen and (max-width: 460px){
        &{
            margin-top: 0;
            margin-bottom: 70px;
        }
    }
`

const Briefcase = () => {

    const [button, setButton] = useState(false)

    return(
        <Div id="portafolio">
            <H2 >PORTAFOLIO</H2>
            {
                button ? <>
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
                            note={data.note}
                        />
                    ))
                    }
                </>
                : <>
                    {
                    DataProject.slice(0,5).map(data => (
                        <Projects 
                            key={data.id} 
                            title={data.title}
                            description={data.description}
                            project={data.project}
                            github={data.github}
                            name={data.name}
                            tech={data.tech}
                            note={data.note}
                        />
                    ))
                    }
                </>
            }
            <ContainerButton>
                <Button onClick={() => setButton(!button)}>
                    {
                        button 
                         ? <>Ver menos <RiArrowUpSLine size="25"/> </>
                         : <>Ver más <RiArrowDownSLine size="25"/></>
                    }
                </Button>
            </ContainerButton>
            <Hr/>
        </Div>
    )
}

export default Briefcase