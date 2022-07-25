import { useParams } from "react-router";
import { API_KEY, api } from "../services/api";
import Loader from "../components/Loader";
import useAxios from "../hooks/useAxios";
import Percent from "../components/Percent";
import Container from "../components/details-components/DetailContainer";
import Header from "../components/details-components/HeaderContainer";
import Body from "../components/details-components/BodyContainer";
import Network from "../components/details-components/NetworkContainer";
import Scroll from "../components/details-components/ScrollContainer";
import Card from "../components/details-components/CreditsCard";

const TvDetails = () => {
  const { id } = useParams();
  const [response, isError, isLoading] = useAxios({
    url: `/tv/${id}?api_key=${API_KEY}&language=en-US`,
  });

  const [responseProviders, isErrorProviders, isLoadingProviders] = useAxios({
    url: `/tv/${id}/watch/providers?api_key=${API_KEY}&language=en-US`,
  });

  const [credits, isErrorCredits, isLoadingCredits] = useAxios({
    url: `/tv/${id}/credits?api_key=${API_KEY}&language=en-US`,
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
          <Body backDrop={tv.backdrop_path} api={api.BACKDROP_PATH}>
            {" "}
            <article>
              {tv.genres.map((genre, index) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </article>
            {tv.tagline && <p className="tagname">" {tv.tagline}"</p>}
            {tv.overview && (
              <div>
                <h2>Overview</h2>
                <p className="overview">{tv.overview}</p>
                <br />
                <hr />
                <br />
              </div>
            )}
            {! isLoadingProviders && (
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
            {tv.homepage && (
              <p className="homepage-link">
                You can Visit the homepage <a href={`${tv.homepage}`}>here</a>
              </p>
            )}{" "}
          </Body>
          <h2 style={{ marginLeft: "1rem" }}>Main cast</h2>
          {!isLoadingCredits && (
            <Scroll>
              {credits.data.cast.map((cast, index) => {
                if (index < 8)
                  return (
                    <Card
                      key={cast.id}
                      name={cast.name}
                      api={api.POSTER}
                      photo={cast.profile_path}
                      character={cast.character}
                    />
                  );
              })}
            </Scroll>
          )}
        </Container>
      )}
    </div>
  );
};
export default TvDetails;
