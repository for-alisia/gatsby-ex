/** Libraries */
import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

/** Components */
import Layout from "../components/layout"
import SEO from "../components/seo"

/** Styles */
const BlogLinkStyled = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: #151515;
`

const ItemWrapperStyled = styled.div`
  width: 100%;
  position: relative;

  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  transition: transform 0.2s ease;

  margin-bottom: 0;

  img {
    margin-bottom: 0;
  }

  .gatsby-image-wrapper {
    height: 300px;
  }

  &:hover {
    transform: scale(1.03);
  }
`

const ItemDescStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;

  h4 {
    padding: 1rem;
    text-align: center;
    color: #f9f9f9;
    background-color: #151515;
  }
`

const ListWrapperStyled = styled.div`
  display: grid;
  grid-template-rows: 300px 300px 300px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  list-style-type: none;
  margin: 0;
`

const BlogCiteStyled = styled.div`
  color: #151515;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-size: 2rem;
  display: block;
  max-width: 70%;
  line-height: 3.1rem;
  text-align: right;
  margin-bottom: 1rem;

  strong {
    font-size: 2.3rem;
  }
`

const CiteWrapperStyled = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  span {
    font-size: 0.8rem;
    font-weight: bold;
    color: #c13b22;
  }

  &:before {
    content: "";
    position: absolute;
    top: -27px;
    right: -47px;
    width: 60%;
    height: 98%;
    border: 1px solid #151515;
  }

  &:after {
    content: "";
    position: absolute;
    top: -67px;
    right: -86px;
    width: 8%;
    height: 46%;
    background-color: #151515;
    color: #f9f9f9;
  }
`

/** Component */
export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <CiteWrapperStyled>
          <BlogCiteStyled as="cite">
            I love to bake <strong>cakes</strong> and I make them for you with{" "}
            <strong>great</strong> pleasure
          </BlogCiteStyled>
          <span>Anna Fet, confectioner</span>
        </CiteWrapperStyled>
        <ListWrapperStyled as="ul">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <ItemWrapperStyled as="li" key={node.id}>
              <BlogLinkStyled to={node.fields.slug}>
                <Img
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
              </BlogLinkStyled>
              <ItemDescStyled>
                <h4>{node.frontmatter.title}</h4>
              </ItemDescStyled>
            </ItemWrapperStyled>
          ))}
        </ListWrapperStyled>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`
