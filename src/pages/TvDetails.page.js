import {useParams} from 'react-router'
import { API_KEY, api } from "../services/api";
import Loader from "../components/Loader";
import useAxios from "../hooks/useAxios";
import styled from "styled-components";

const TvDetails = props =>{
const {id} = useParams()
  const [response, isError, isLoading] = useAxios({
    url: `/tv/${id}?api_key=${API_KEY}&language=en-US`,
  });

  const DetailContainer = styled.div``;

  const HeaderContainer = styled.div`
    width: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: norepeat;

    img {
      width: 100%;
      height: auto;
    }
  `;



  return(
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <DetailContainer>
          <HeaderContainer
            style={{
              backgroundImage: `linear-gradient(transparent,black),url(${api.BACKDROP_PATH}${response.data.backdrop_path})`,
            }}
          >
            <img src={`${api.POSTER}${response.data.poster_path}`} />
          </HeaderContainer>
        </DetailContainer>
      )}
    </div>
  )

}
export default TvDetails
