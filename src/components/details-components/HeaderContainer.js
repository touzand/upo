import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(to right, #000 0% 30%, #2225),
    url(${props => props.api}${props => props.backDrop});
  background-position: center center;
  background-size: cover;
  background-repeat: norepeat;
  color: white;
  display: flex;

  img {
    width: 100px;
    height: auto;
  }

  div {
    margin: 0 1rem;

    h2 {
      margin-bottom: 0.5rem;
    }

    span {
      margin-right: 1rem;
      color: grey;
    }
  }
`;

const Header = ({ children, backDrop, api }) => (
  <HeaderContainer backDrop={backDrop} api={api}>{children}</HeaderContainer>
);
export default Header;
