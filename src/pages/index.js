import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import Skills from "../components/skills"
import Briefcase from "../components/briefcase"
import Training from '../components/training'
import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-padding-top: 70px;
    @media screen and (max-width: 794px){
    &{
      scroll-padding-top: 50px;
    }
  }
  }
`

const Hr = styled.hr`
  width: 100%;
`

const IndexPage = (props) => {
  return(
  <Layout>
    <GlobalStyle />
    <SEO title="Sitio Web" />
    <Home />
    <Skills/>
    {/* <Hr/> */}
    <Briefcase/>
    <Training/>
  </Layout>
)
}

export default IndexPage
