import styled from "styled-components";
import Percent from "../Percent";
import "../../index.css";

const HeaderContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(to left,transparent,black 80%),url(${(props) => props.api}${(props) => props.backDrop});
  background-position: center center;
  background-size: cover;
  background-repeat: norepeat;
  color: white;
  display: flex;
  position:relative;

  .bg-color{
  display:none;
  }

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
  background-image:url(${(props) => props.api}${(props) => props.backDrop});
    flex-grow: 1;
    width: 500px;
    padding: 0 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  .bg-color{
  display:initial;
  width:100%;
  height:100%;
  background-color:#151515;
  position:absolute;
  z-index:1;
  mix-blend-mode:multiply;
  }

  *{
  z-index:2;
  
  }

    & img {
      width: 280px;
    }
  }
`;

const Header = (props) => (
  <HeaderContainer
    backDrop={props.media.backdrop_path}
    api={props.api.BACKDROP_PATH}
>
    <div className='bg-color'></div>
    <img src={`${props.api.POSTER}${props.media.poster_path}`} />
    <div>
      <h2>{props.media.title || props.media.name}</h2>
      <span>{props.media.release_date || props.media.first_air_date}</span>
      <Percent>{props.media.vote_average}</Percent>
    </div>
  </HeaderContainer>
);
export default Header;
