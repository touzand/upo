import styled,{keyframes} from "styled-components";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
0%{top:8rem}
100%{top:0}
`

const Card = styled.div`
  height: auto;
  margin-left: 0.5rem;
  position:relative;
  animation: ${fadeIn} 1s ${props => props.animationDelay}s ease both;

  img {
    border-radius: 0.25rem;
    width: 120px;
  }

  h4 {
    margin-top: 0.5rem;
  }

  @media (min-width:800px){

img{
width:150px;
}
  }
`;

const SlideCard = ({ props,mediaType,animationDelay }) => (
  <Link to={`upo/${mediaType}/${props.id}`}>
    <Card animationDelay={animationDelay}>
      <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} />
    </Card>
  </Link>
);
export default SlideCard;
