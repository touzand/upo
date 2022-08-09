import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  maring: 0;
  color: white;
  padding: 0.5rem 0;
  position: relative;
  bottom: 0;
`;

const Footer = () => (
  <FooterContainer>
    <p>Make by Alan G. Alonso ( Touzand )</p>
  </FooterContainer>
);
export default Footer;
