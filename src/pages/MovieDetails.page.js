import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { API_KEY, api } from "../services/api";
import Loader from "../components/Loader";
import Percent from "../components/Percent";
import Container from "../components/details-components/DetailContainer";
import Header from "../components/details-components/HeaderContainer";
import Body from "../components/details-components/BodyContainer";
import Credits from '../components/details-components/CreditsContainer'

const MovieDetails = () => {
  const { id } = useParams();
  const [response, isError, isLoading] = useAxios({
    url: `/movie/${id}?api_key=${API_KEY}&language=en-US`,
  });

  const [credits,isErrorCredits,isLoadingCredits] = useAxios({
    url: `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  })

  let movie = response.data;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Header backDrop={movie.backdrop_path} api={api.BACKDROP_PATH}>
            <img src={`${api.POSTER}${movie.poster_path}`} />
            <div>
              <h2>{movie.title}</h2>
              <span>{movie.release_date}</span>
              <Percent>{movie.vote_average}</Percent>
            </div>
          </Header>
          <Body backDrop={movie.backdrop_path} api={api.BACKDROP_PATH}>
            <article>
              {movie.genres.map((genre, index) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </article>
          {movie.tagline && <blockquote className="tagname">" {movie.tagline}"</blockquote>}
            <h2>Overview</h2>
            <p className="overview">
              {movie.overview}
            </p>
          </Body>
          <div>
            <h2>Main cast</h2>
            <Credits>
              {console.log(credits)}
            </Credits>
          </div>
        </Container>
      )}
    </div>
  );
};
export default MovieDetails;
