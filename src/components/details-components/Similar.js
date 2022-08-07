import styled from "styled-components";
import { API_KEY, api } from "../../services/api";
import useAxios from "../../hooks/useAxios";
import Scroll from "../details-components/ScrollContainer";
import { Link } from "react-router-dom";
import Percent from "../Percent";
import '../../index.css'

const Container = styled.div`
  background-image:linear-gradient(to bottom,#0009,var(--dark)),url( ${props => props.api}${props=>props.backgroundPath} );
  background-position:center;
  background-size:cover;
  padding-top:.5rem;

  h3{
  color:white;
  margin:1rem;
  }
`

const SimilarScroll = styled.div`
  width: 100vw;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  padding-bottom: 3rem;
  padding-right: 1rem;
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

const Similar = (props) => {
  const [response, isError, isLoading] = useAxios({
    url: `/${props.mediaType}/${props.id}/similar?api_key=${API_KEY}&language=en-US`,
  });

  return (
    <div>
      {!isLoading && response.data.results.length !== 0 && (
        <Container api={api.POSTER} backgroundPath={response.data.results[ Math.floor(Math.random() * response.data.results.length) ].backdrop_path}>
          <h3 style={{ paddingLeft: "1rem" }}>Similar</h3>
          <SimilarScroll>
            {!isLoading &&
              response.data.results.map((media) => (
                <RecomendationContainer key={media.id}>
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
        </Container>
      )}
    </div>
  );
};
export default Similar;
