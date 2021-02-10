/** Libraries */
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

/** Components */
import Layout from "../components/layout"

/** Styles */
const ContentWrapperStyled = styled.div`
  display: flex;
  margin-top: 8rem;
  margin-bottom: 8rem;

  h1 {
    font-size: 3.3rem;
    max-width: 50%;
    text-align: right;
    padding-right: 3rem;
    line-height: 4.5rem;
  }
`

const ImgWrapperStyled = styled.div`
  width: 50%;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -27px;
    left: -27px;
    z-index: -1;
    width: 100%;
    height: 100%;
    border: 1px solid #151515;
  }

  .gatsby-image-wrapper {
    max-height: 400px;
  }
`

const HtmlWrapperStyled = styled.div``

export default ({ data }) => {
  const post = data.markdownRemark

  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <ContentWrapperStyled>
        <h1>{post.frontmatter.title}</h1>
        <ImgWrapperStyled>
          <Img fluid={featuredImgFluid} />
        </ImgWrapperStyled>
      </ContentWrapperStyled>
      <HtmlWrapperStyled
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></HtmlWrapperStyled>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
