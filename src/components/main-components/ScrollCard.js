import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  height: auto;
  margin-left: 0.5rem;

  img {
    border-radius: 0.25rem;
    width: 120px;
  }

  h4 {
    margin-top: 0.5rem;
  }
`;

const SlideCard = ({ props,mediaType }) => (
  <Link to={`/${mediaType}/${props.id}`}>
    <Card>
      <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} />
    </Card>
  </Link>
);
export default SlideCard;
