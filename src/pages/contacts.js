import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const TitleStyled = styled.div`
  margin: 4rem 0;
  font-family: "Source Sans Pro";
  font-size: 3rem;
  text-align: right;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 60%;
    height: 100%;
    z-index: -1;
    border: 1px solid #151515;
    top: 0px;
    right: 40px;
  }
`
const SubtitleSttyled = styled.div`
  color: #151515;
  display: inline-block;
  position: relative;
  font-size: 1.5rem;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 60px;
    height: 60px;
    z-index: -1;
    background: #c13b22;
    top: -50px;
    left: -40px;
  }
`
const FielGroupStyled = styled.div``
const LabelStyled = styled.label`
  display: inline-block;
  transform: translate(21px, 11px);
  background-color: white;
`

const InputStyled = styled.input`
  border: 1px solid #151515;
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 0;
  width: 500px;
  display: block;
`

const ButtonStyled = styled.button`
  padding: 0.5rem 3rem;
  background-color: #c13b22;
  border-radius: 0;
  border: none;
  text-transform: uppercase;
  color: #f9f9f9;
  margin-top: 2rem;
  outline: none;
`

const ContactsPage = () => (
  <Layout>
    <SEO title="Contacts page" />
    <TitleStyled as="h2">Do you have any questions?</TitleStyled>
    <SubtitleSttyled as="h4">Feel free to write me:</SubtitleSttyled>
    <form>
      <FielGroupStyled>
        <LabelStyled htmlFor="name">Your name</LabelStyled>
        <InputStyled name="name" type="text" />
      </FielGroupStyled>
      <FielGroupStyled>
        <LabelStyled htmlFor="email">Your email</LabelStyled>
        <InputStyled name="email" type="email" />
      </FielGroupStyled>
      <FielGroupStyled>
        <LabelStyled htmlFor="message">Your message</LabelStyled>
        <InputStyled as="textarea" name="message" />
      </FielGroupStyled>
      <ButtonStyled type="submit">Send</ButtonStyled>
    </form>
  </Layout>
)

export default ContactsPage
