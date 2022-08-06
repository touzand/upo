import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Percent from '../Percent'

const fadeIn = keyframes`
0%{top:8rem}
100%{top:0}
`;

const Card = styled.div`
  height: auto;
  margin-left: 0.5rem;
  position: relative;
  animation: ${fadeIn} 1s ${(props) => props.animationDelay}s ease both;

  img {
    border-radius: 0.25rem;
    width: 120px;
  }

  h4 {
    margin-top: 0.5rem;
  }

  div {
    display: none;
  }

  @media (min-width: 800px) {
  margin-left:1rem;

    img {
      width: 150px;
      height: 225px;
      border-radius:.25rem .25rem 0rem 0rem;
    }

    div {
      display: flex;
      flex-direction: column;
      color:white;
      margin-bottom:1rem;
      align-items:right;

      h4{
      margin:.5rem 0;
      }

  span{
  color:var(--dark) !important;
  font-weight:bold;
background-color:var(--dark-80) !important;

      }
    }
  }
`;

const SlideCard = ({ props, mediaType, animationDelay }) => (
  <Link to={`upo/${mediaType}/${props.id}`}>
    <Card animationDelay={animationDelay}>
      <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} />
      <div>
        <Percent>{props.vote_average}</Percent>
        <h4>{props.title || props.name}</h4>
      </div>
    </Card>
  </Link>
);
export default SlideCard;
