import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// @ts-ignore
import photo from "../images/anna.jpg"
import styled from "styled-components"

const ContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageWrapperStyled = styled.div`
  width: 75%;
  margin-bottom: 2rem;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border: 1px solid #151515;
    top: -50px;
    left: 50px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: -1;
    background-color: #c13b22;
    top: -80px;
    right: -80px;
  }
`

const TextWrapperStyled = styled.div`
  width: 100%;
`

const TitleStyled = styled.div`
  text-align: right;
  font-size: 3rem;
  font-family: "Source Sans Pro";
  margin: 6rem 0;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About Anna" />
    <TitleStyled as="h2">Anna Fet, confectioner</TitleStyled>
    <ContentWrapperStyled>
      <ImageWrapperStyled>
        <img src={photo} alt="Anna Fet photo" />
      </ImageWrapperStyled>
      <TextWrapperStyled as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TextWrapperStyled>
    </ContentWrapperStyled>
  </Layout>
)

export default AboutPage
