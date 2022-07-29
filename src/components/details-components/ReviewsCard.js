import {api} from '../../services/api'
import styled from "styled-components";

const ReviewsCardContainer = styled.div`
margin:1rem;
padding:1rem;
border:.5px solid grey;
`;

const ReviewsCard = ( { props } ) =>(

  <ReviewsCardContainer>
    <div>
      <h3>{props.author}</h3>
      <p>{props.content}</p>
    </div>
  </ReviewsCardContainer>

)
export default ReviewsCard
