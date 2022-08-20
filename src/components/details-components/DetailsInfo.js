import styled from "styled-components";
import Card from "../../components/details-components/CreditsCard";
import Scroll from "../../components/details-components/ScrollContainer";
import Season from "../../components/details-components/Season";
import Reviews from "../../components/details-components/Reviews";
import ReviewsCard from "../../components/details-components/ReviewsCard";
import MediaVideos from "../../components/details-components/MediaVideos.js";
import Recomendation from "../../components/details-components/Recomendations";
import useAxios from "../../hooks/useAxios";

const GeneralDetailsContainer = styled.div``;

const DetailsInfo = (props) => {

  const [credits, isErrorCredits, isLoadingCredits] = useAxios({
    url: `/${props.mediaType}/${props.id}/credits?api_key=${props.apiKey}&language=en-US`,
  });

  const [responseReviews, isErrorReviews, isLoadingReviews] = useAxios({
    url: `/${props.mediaType}/${props.id}/reviews?api_key=${props.apiKey}&language=en-US&page=1`,
  });

  return (
    <GeneralDetailsContainer className="details-info">
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
                    api={props.api.POSTER}
                    photo={cast.profile_path}
                    character={cast.character}
                  />
                );
            })}
          </Scroll>
        </>
      )}
      {!props.isLoading && props.media.seasons && (
        <>
          <hr />
          <h3 style={{ marginLeft: "1rem" }}>Last season</h3>
          <Season
            name={props.media.seasons[props.media.seasons.length - 1].name}
            airDate={
              props.media.seasons[props.media.seasons.length - 1].air_date
            }
            episodeCount={
              props.media.seasons[props.media.seasons.length - 1].episode_count
            }
            overview={
              props.media.seasons[props.media.seasons.length - 1].overview
            }
          />
        </>
      )}

      {!isLoadingReviews && responseReviews.data.results.length !== 0 && (
        <div>
          <h3 style={{ marginLeft: "1rem" }}>Reviews</h3>
          <Reviews>
            {responseReviews.data.results.map((props, index) => (
              <ReviewsCard props={props} key={index} />
            ))}
          </Reviews>
        </div>
      )}

      <hr />

      <MediaVideos id={props.id} mediaType={props.mediaType} />
      <Recomendation
        id={props.id}
        mediaType={props.mediaType}
        paddingRight="1rem"
      />
    </GeneralDetailsContainer>
  );
};

export default DetailsInfo;
