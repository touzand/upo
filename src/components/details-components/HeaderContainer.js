import styled from "styled-components";
import Percent from "../Percent";
import "../../index.css";

const HeaderContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(to right, black 0% 30%, #2229),
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
    flex-grow: 1;
    width: 500px;
    padding: 0 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & img {
      width: 280px;
    }
  }
`;

const Header = (props) => (
  <HeaderContainer backDrop={props.media.backdrop_path} api={props.api.BACKDROP_PATH}>
    <img src={`${props.api.POSTER}${props.media.poster_path}`} />
    <div>
      <h2>{props.media.title || props.media.name}</h2>
      <span>{props.media.release_date || props.media.first_air_date}</span>
      <Percent>{props.media.vote_average}</Percent>
    </div>
  </HeaderContainer>
);
export default Header;
