import {useState} from 'react'
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
import Reviews from '../components/details-components/Reviews'
import ReviewsCard from '../components/details-components/ReviewsCard'
import MediaVideos from '../components/details-components/MediaVideos.js'
import MediaImages from '../components/details-components/MediaImages.js'

const Details = (props) => {
  const [videoVisisble,setVideoVisible] = useState(false)
  const { id } = useParams();
  const [response, isError, isLoading] = useAxios({
    url: `/${props.mediaType}/${id}?api_key=${API_KEY}&language=en-US`,
  });

  const [responseProviders, isErrorProviders, isLoadingProviders] = useAxios({
    url: `/${props.mediaType}/${id}/watch/providers?api_key=${API_KEY}&language=en-US`,
  });

  const [credits, isErrorCredits, isLoadingCredits] = useAxios({
    url: `/${props.mediaType}/${id}/credits?api_key=${API_KEY}&language=en-US`,
  });

  const [responseReviews, isErrorReviews, isLoadingReviews] = useAxios({
    url: `/${props.mediaType}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  });

  let media = response.data;
  let providers;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Header backDrop={media.backdrop_path} api={api.BACKDROP_PATH}>
            <img src={`${api.POSTER}${media.poster_path}`} />
            <div>
              <h2>{media.title || media.name}</h2>
              <span>{media.release_date || media.first_air_date}</span>
              <Percent>{media.vote_average}</Percent>
            </div>
          </Header>
          <Body backDrop={media.backdrop_path} api={api.BACKDROP_PATH}>
            <article>
              {media.genres.map((genre, index) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </article>
            {media.tagline && (
              <blockquote className="tagname">" {media.tagline}"</blockquote>
            )}
            {media.overview && (
              <>
                <h2>Overview</h2>
                <p className="overview">{media.overview}</p>
                <br />
                <hr />
                <br />
              </>
            )}
            {!isErrorProviders && !isLoadingProviders && (
              <div>
                {Object.entries(responseProviders.data.results).map(
                  (el, index) => {
                    if (el[0] === "US") {
                      providers = el[1];
                    } else {
                      return;
                    }
                  }
                )}

                {providers &&
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
                  })}
              </div>
            )}
            {media.homepage && (
              <p className="homepage-link">
                You can Visit the homepage{" "}
                <a href={`${media.homepage}`}>here</a>
              </p>
            )}{" "}
          </Body>
          <h3 style={{ marginLeft: "1rem" }}>Main cast</h3>

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
          {!isLoading && media.seasons && (
            <>
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
            {/*
              {!isLoadingReviews && (
                <Reviews>{responseReviews.data.results.map(( props,index )=><ReviewsCard props={props}/>)}</Reviews>
                )}
                */}
              <button onClick={()=>setVideoVisible(videoVisisble=>false)}>image</button><button onClick={()=>setVideoVisible(videoVisisble=>true)}>video</button>
              <h3 style={{ marginLeft: "1rem" }}>Visual content</h3>
              {videoVisisble ? <MediaVideos id={id} mediaType={props.mediaType}/>  : <MediaImages mediaType={props.mediaType} id={id}/>}
        </Container>
      )}
    </div>
  );
};
export default Details;