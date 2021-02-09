/** Libraries */
import React from "react"
import styled from "styled-components"

const FooterStyled = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background-color: #151515;
  color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
`

/** Component */
const Footer = () => (
  <FooterStyled as="footer">
    <div>
      {" "}
      © {new Date().getFullYear()}, Built by Elena Romanova as a portfolio
      project
    </div>
  </FooterStyled>
)

export default Footer
