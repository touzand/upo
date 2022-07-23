import styled from "styled-components";
import Percent from '../Percent'
import {formatAsPercent} from "../../utilities/util"

const Card = styled.div`
  height: auto;
  margin-left: .5rem;

  img {
    border-radius: 0.25rem;
    width: 120px;
  }

  h4 {
    margin-top: 0.5rem;
  }
`;

const SlideCard = ({ props }) => (
  <Card>
    <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} />
  </Card>
);
export default SlideCard;
