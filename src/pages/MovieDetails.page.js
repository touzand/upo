import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { API_KEY, api } from "../services/api";
import styled from "styled-components";
import Loader from "../components/Loader";

const MovieDetails = (props) => {
  const { id } = useParams();
  const [response, isError, isLoading] = useAxios({
    url: `/movie/${id}?api_key=${API_KEY}&language=en-US`,
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

  return (
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
  );
};
export default MovieDetails;
