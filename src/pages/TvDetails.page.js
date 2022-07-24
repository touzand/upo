import { useParams } from "react-router";
import { API_KEY, api } from "../services/api";
import Loader from "../components/Loader";
import useAxios from "../hooks/useAxios";
import Percent from "../components/Percent";
import Container from "../components/details-components/DetailContainer";
import Header from "../components/details-components/HeaderContainer";
import Body from "../components/details-components/BodyContainer";

const TvDetails = () => {
  const { id } = useParams();
  const [response, isError, isLoading] = useAxios({
    url: `/tv/${id}?api_key=${API_KEY}&language=en-US`,
  });

  let tv = response.data;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Header backDrop={tv.backdrop_path} api={api.BACKDROP_PATH}>
            <img src={`${api.POSTER}${tv.poster_path}`} />
            <div>
              <h2>{tv.name}</h2>
              <span>{tv.first_air_date}</span>
              <Percent>{tv.vote_average}</Percent>
            </div>
          </Header>
          <Body backDrop={tv.backdrop_path} api={api.BACKDROP_PATH}> <article>
              {tv.genres.map((genre, index) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </article>
            {tv.tagline && <p className="tagname">" {tv.tagline}"</p>}
            <h2>Overview</h2>
            <p className="overview">
              {tv.overview}
            </p>
          </Body>
        </Container>
      )}
    </div>
  );
};
export default TvDetails;
