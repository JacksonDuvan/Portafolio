import React from 'react'
import styled from 'styled-components'
import Projects from './projects'

const DataProject = [
    {
        id: 1,
        title: 'Portafolio',
        description: 'El lugar para mostrar mis proyectos.',
        project: 'https://jacksonzambrano.netlify.app/',
        github: 'https://github.com/JacksonDuvan/Portafolio',
        name: 'portafolio',
        tech: 'React, Gatsby, Styled Component, Graphql, Hooks'
    },
    {
        id: 2,
        title: 'Platzi Swag',
        description: 'Una tienda online para comprar productos de la Platzi Conf.',
        project: 'https://platziswag-jackson.netlify.app/',
        github: 'https://github.com/JacksonDuvan/platzi-swag',
        name: 'swag',
        tech: 'React, Gatsby, Styled Component, Graphql, Stripe'
    },
    {
        id: 3,
        title: 'Clon Spotify',
        description: 'Una replica de la Web App de spotify usando su API.',
        project: 'https://clon-spotify.jacksonduvan.now.sh/',
        github: 'https://github.com/JacksonDuvan/clon-spotify',
        name: 'spotify',
        tech: 'HTML, CSS, React, Redux, Redux-thunk, API Spotify'
    },
    {
        id: 4,
        title: 'Reacciones de Facebook',
        description: 'Implementando la funcionalidad de las reacciones de Facebook e integramos la API de la Nasa.',
        project: 'https://reactions-fb.jacksonduvan.now.sh/',
        github: 'https://github.com/JacksonDuvan/reactions_fb',
        name: 'reactions',
        tech: 'HTML, CSS, JavaScript, API Nasa'
    },
    {
        id: 5,
        title: 'Kiwi Bot',
        description: 'Una plataforma para mostrar los servicios de los KiwiBots.',
        project: 'https://jacksonduvan.github.io/kiwi_campus/',
        github: 'https://github.com/JacksonDuvan/kiwi_campus',
        name: 'kiwi',
        tech: 'HTML, CSS, JavaScript'
    }
]

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