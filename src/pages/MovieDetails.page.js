import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { API_KEY, api } from "../services/api";
import Loader from "../components/Loader";
import Percent from "../components/Percent";
import Container from "../components/details-components/DetailContainer";
import Header from "../components/details-components/HeaderContainer";
import Body from "../components/details-components/BodyContainer";
import Card from "../components/details-components/CreditsCard";
import Scroll from '../components/details-components/ScrollContainer'

const MovieDetails = () => {
  const { id } = useParams();
  const [response, isError, isLoading] = useAxios({
    url: `/movie/${id}?api_key=${API_KEY}&language=en-US`,
  });

  const [credits, isErrorCredits, isLoadingCredits] = useAxios({
    url: `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  });

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
            {movie.tagline && (
              <blockquote className="tagname">" {movie.tagline}"</blockquote>
            )}
            <h2>Overview</h2>
            <p className="overview">{movie.overview}</p>
            <br/>
            <hr />
            <br/>
            {movie.homepage && (
              <p className="homepage-link">
                You can Visit the homepage{" "}
                <a href={`${movie.homepage}`}>here</a>
              </p>
            )}{" "}
              {isLoadingProviders ? <Loader/> : (
              <div>
                {Object.keys(responseProviders.data.results).map(
                  (key, index) => {
                    if (key === "US") {
                      let network =
                        Object.values(responseProviders.data.results)[index].flatrate[0] ||
                        Object.values(responseProviders.data.results)[index].free[0]

                      return (
                        <Network
                          logo={network.logo_path}
                          name={network.provider_name}
                        api={api.POSTER}
                        key={network.id}
                        />
                      );
                    }
                  }
                )}
              </div>
            )}
          </Body>
            <h2 style={{marginLeft:"1rem"}}>Main cast</h2>
            { ! isLoadingCredits &&
              <Scroll>
                {credits.data.cast.map((cast,index)=>{if(index < 8)return <Card key={cast.id} name={cast.name} api={api.POSTER} photo={cast.profile_path} character={cast.character}/>  })}
              </Scroll>
            }
        </Container>
      )}
    </div>
  );
};
export default MovieDetails;
