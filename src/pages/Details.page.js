import { useState } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { API_KEY, api } from "../services/api";
import Loader from "../components/Loader";
import Percent from "../components/Percent";
import Container from "../components/details-components/DetailContainer";
import Header from "../components/details-components/HeaderContainer";
import Body from "../components/details-components/BodyContainer";
import Card from "../components/details-components/CreditsCard";
import Scroll from "../components/details-components/ScrollContainer";
import Network from "../components/details-components/NetworkContainer";
import Season from "../components/details-components/Season";
import Reviews from "../components/details-components/Reviews";
import ReviewsCard from "../components/details-components/ReviewsCard";
import MediaVideos from "../components/details-components/MediaVideos.js";
import MediaImages from "../components/details-components/MediaImages.js";
import Recomendation from "../components/details-components/Recomendations";
import Similar from "../components/details-components/Similar";
import Data from "../components/details-components/Data";

const Details = ({ mediaType, children }) => {
  const [videoVisisble, setVideoVisible] = useState(false);
  const { id } = useParams();
  const [response, isError, isLoading] = useAxios({
    url: `/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`,
  });

  const [responseProviders, isErrorProviders, isLoadingProviders] = useAxios({
    url: `/${mediaType}/${id}/watch/providers?api_key=${API_KEY}&language=en-US`,
  });

  const [credits, isErrorCredits, isLoadingCredits] = useAxios({
    url: `/${mediaType}/${id}/credits?api_key=${API_KEY}&language=en-US`,
  });

  const [responseReviews, isErrorReviews, isLoadingReviews] = useAxios({
    url: `/${mediaType}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  });

  let media = response.data;
  let providers;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <div className="general-body-container">
            <Header backDrop={media.backdrop_path} api={api.BACKDROP_PATH}>
              <img src={`${api.POSTER}${media.poster_path}`} />
              <div>
                <h2>{media.title || media.name}</h2>
                <span>{media.release_date || media.first_air_date}</span>
                <Percent>{media.vote_average}</Percent>
              </div>
            </Header>
            <Body backDrop={media.backdrop_path} api={api.BACKDROP_PATH}>
              <div className="cristal overview-desktop">
                {media.tagline && (
                  <blockquote className="tagname">
                    " {media.tagline}"
                  </blockquote>
                )}
                {media.overview && (
                  <div className="overview">
                    <h2>Overview</h2>
                    <p className="overview">{media.overview}</p>
                    <br />
                    <br />
                    <hr />
                  </div>
                )}
              </div>
              <div className="body-desktop-version">
                <span className='indic'>Genres</span>
                <article>
                  {media.genres.map((genre, index) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                  </article>
                <div className="cristal overview-mobile">
                  {media.tagline && (
                    <blockquote className="tagname">
                      " {media.tagline}"
                    </blockquote>
                  )}
                  {media.overview && (
                    <div className="overview-mobile">
                      <h2>Overview</h2>
                      <p className="overview">{media.overview}</p>
                      <br />
                      <hr />
                      <br />
                    </div>
                  )}
                </div>
                <span className='indic'>Providers</span>
                {!isErrorProviders && !isLoadingProviders && (
                  <div className="providers-container">
                    {Object.entries(responseProviders.data.results).map(
                      (el, index) => {
                        if (el[0] === "US") {
                          providers = el[1];
                        } else {
                          return;
                        }
                      }
                    )}

                    {providers ?
                      Object.entries(providers).map((provider, index) => {
                        if (provider[0] !== "link" && provider[0] !== "buy") {
                          return (
                            <Network
                              name={provider[1][0].provider_name}
                              logo={provider[1][0].logo_path}
                              api={api.POSTER}
                              key={index}
                            />
                          );
                        } else {
                          return;
                        }
                      }) : <span className='not-found'>not found</span>}
                  </div>
                )}
                  {media.homepage ? (
                  <p className="homepage-link">
                    You can Visit the homepage{" "}
                    <a href={`${media.homepage}`}>here</a>
                  </p>
                ) : <span className='not-found'>Sorry. homepage not found</span>}{" "}
              </div>
            </Body>
          </div>
          <div className="details-info">
            {!isLoadingCredits && (
              <>
                <h3 style={{ marginLeft: "1rem" }}>Main cast</h3>
                <Scroll paddingRight="1rem">
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
              </>
            )}
            {!isLoading && media.seasons && (
              <>
                <hr />
                <h3 style={{ marginLeft: "1rem" }}>Last season</h3>
                <Season
                  name={media.seasons[media.seasons.length - 1].name}
                  airDate={media.seasons[media.seasons.length - 1].air_date}
                  episodeCount={
                    media.seasons[media.seasons.length - 1].episode_count
                  }
                  overview={media.seasons[media.seasons.length - 1].overview}
                />
              </>
            )}

              {!isLoadingReviews && responseReviews.data.results.length !== 0 && (
                <div>

                <h3 style={{ marginLeft: "1rem" }}>Reviews</h3>
                <Reviews>{responseReviews.data.results.map(( props,index )=><ReviewsCard props={props} key={index}/>)}</Reviews>
                </div>
                )}

            <hr />

            <MediaVideos id={id} mediaType={mediaType} />
            <Recomendation id={id} mediaType={mediaType} paddingRight="1rem" />
          </div>
          <Similar id={id} mediaType={mediaType} />
          <Data>
            <h2 style={{ marginLeft: "1rem" }}>Data</h2>
            <h3>Original title</h3>
            <span>{media.title || media.name}</span>
            <h3>State</h3>
            <span>{media.status}</span>
            <h3>Original language</h3>
            <span>{media.original_language}</span>
            <h3>Budget</h3>
            <span>
              {media.budget
                ? new Intl.NumberFormat("ud-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(media.budget)
                : "-"}
            </span>
            <h3>Revenue</h3>
            <span>
              {media.revenue
                ? new Intl.NumberFormat("ud-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(media.revenue)
                : "-"}
            </span>
          </Data>
        </Container>
      )}
      {children}
    </div>
  );
};
export default Details;
