import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Percent from '../Percent'
import '../../index.css'

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

   .desktop-version-info{
    display: none;
  }

  @media (min-width: 800px) {
  margin-left:1rem;

   .desktop-version-info{
    display: flex;
  }

&:hover{
img{
mix-blend-mode:luminosity;
}
}

.img-bg{
      background-color:var(--primal-color);
      border-radius:.25rem;
      margin-bottom:.25rem;

}

    img {
      width: 150px;
      height: 225px;
      border-radius:.25rem .25rem 0rem 0rem;
      position:relative;

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
background-image:linear-gradient(to right,#f3ce13,var(--dark)) !important;

      }
    }
  }
`;

const SlideCard = ({ props, mediaType, animationDelay }) => (
  <Link to={`upo/${mediaType}/${props.id}`}>
    <Card animationDelay={animationDelay}>
      <div className='img-bg'>
    <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} />
      </div> 
      <div className='desktop-version-info'>
        <Percent>{props.vote_average}</Percent>
        <h4>{props.title || props.name}</h4>
      </div>
    </Card>
  </Link>
);
export default SlideCard;
