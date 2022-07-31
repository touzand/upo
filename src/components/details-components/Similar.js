import styled from "styled-components";
import { API_KEY, api } from "../../services/api";
import useAxios from "../../hooks/useAxios";
import Scroll from "../details-components/ScrollContainer";
import { Link } from "react-router-dom";
import Percent from "../Percent";

const SimilarScroll = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  padding: 3rem 0;
  padding-right: 1rem;
  background-image:linear-gradient(to bottom,#0009,#000),url( ${props => props.api}${props=>props.backgroundPath} );
  color:white;
`;

const RecomendationContainer = styled.div`
  img {
    width: 240px;
    margin-left: 1rem;
    border-radius: 0.5rem;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;

    h5 {
      margin: 0;
    }
  }
`;

const Recomendation = (props) => {
  const [response, isError, isLoading] = useAxios({
    url: `/${props.mediaType}/${props.id}/similar?api_key=${API_KEY}&language=en-US`,
  });

  return (
    <div>
      {!isLoading && response.data.results.length !== 0 && (
        <div>
          <h3 style={{ paddingLeft: "1rem" }}>Similar</h3>
          <SimilarScroll api={api.POSTER} backgroundPath={response.data.results[ Math.floor(Math.random() * response.data.results.length) ].backdrop_path}>
            {!isLoading &&
              response.data.results.map((media) => (
                <RecomendationContainer>
                  <a href={`../${props.mediaType}/${media.id}`}>
                    <img src={`${api.POSTER}${media.backdrop_path}`} />
                  </a>
                  <div>
                    <h5>{media.title || media.name}</h5>
                    <Percent>{media.vote_average}</Percent>
                  </div>
                </RecomendationContainer>
              ))}
          </SimilarScroll>
        </div>
      )}
    </div>
  );
};
export default Recomendation;
