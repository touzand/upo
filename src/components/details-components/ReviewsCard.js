import {api} from '../../services/api'
import styled from "styled-components";

const ReviewsCardContainer = styled.div``;

const ReviewsCard = props =>(

  <ReviewsCardContainer>
    <div>
      <div><img src={`${api.POSTER}${ props.props.author_details.avatar_path }`}/></div>
      <span></span>
    </div>
  </ReviewsCardContainer>

)
export default ReviewsCard
