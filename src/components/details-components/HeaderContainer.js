import styled from "styled-components";
import "../../index.css";

const HeaderContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(to right, var(--dark) 0% 30%, #2229),
    url(${(props) => props.api}${(props) => props.backDrop});
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

  @media (min-width: 800px) {
  flex-grow:1;
    width: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & img {
      width: 200px;
    }
  }
`;

const Header = ({ children, backDrop, api }) => (
  <HeaderContainer backDrop={backDrop} api={api}>
    {children}
  </HeaderContainer>
);
export default Header;
