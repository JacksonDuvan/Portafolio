import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import Skills from "../components/skills"
import Briefcase from "../components/briefcase"
import Training from '../components/training'
import styled from 'styled-components'

const Hr = styled.hr`
  width: 100%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Skills/>
    <Hr/>
    <Briefcase/>
    <Training/>
  </Layout>
)

export default IndexPage
