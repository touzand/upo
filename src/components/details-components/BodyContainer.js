import styled from "styled-components";
import useAxios from "../../hooks/useAxios";
import Network from "../../components/details-components/NetworkContainer";

const BodyContainer = styled.div`
  background-image: url(${(props) => props.api}${(props) => props.backDrop});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  position: relative;

  .tagname {
    font-weight: bold;
    padding: 0.5rem;
    color: white;
    text-align: center;
    border-bottom: solid thin white;
  }

  article {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      color: white;
      border-color: white;
    }
  }

  .homepage-link a {
    padding: 0.25rem;
    background-color: whitesmoke;
    font-weight: bold;
    color: #222;
    border-radius: 0.25rem;
  }

  @props.media (min-width: 800px) {
    background-image: linear-gradient(to right, transparent, black),
      url(${(props) => props.api}${(props) => props.backDrop});
  }
`;

const BodyDiv = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  display: flex;

  .cristal {
    padding: 1rem;
    margin: 1rem 0;
    background-color: #0009;
  }

  .overview-desktop {
    display: none;
    padding: 4vw;
  }

  @media (min-width: 800px) {
    flex-grow: 2;

    .cristal {
      p {
        height: 100%;
      }
    }

    .overview-mobile {
      display: none;
    }

    .overview-desktop {
      display: initial;
    }

    article {
      justify-content: left;
    }

    .providers-container {
      justify-content: left;
      margin-top: 1rem;
      gap: 1rem;
    }

    .cristal {
    }

    .body-desktop-version {
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 2rem;

      article {
        width: 100%;
      }

      div {
        width: 20vw;
      }

      p {
        width: 100%;
      }
    }

    .overview {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      hr {
        display: none;
      }
    }
  }
`;

const Body = props => {


  const [responseProviders, isErrorProviders, isLoadingProviders] = useAxios({
    url: `/${props.mediaType}/${props.id}/watch/providers?api_key=${props.apiKey}&language=en-US`,
  });

  let providers;

  return (
    <BodyContainer api={props.api.BACKDROP_PATH} backDrop={props.media.backdrop_path}>
      <BodyDiv>
              <div className="cristal overview-desktop">
                {props.media.tagline && (
                  <blockquote className="tagname">
                    " {props.media.tagline}"
                  </blockquote>
                )}
                {props.media.overview && (
                  <div className="overview">
                    <h2>Overview</h2>
                    <p className="overview">{props.media.overview}</p>
                    <br />
                    <br />
                    <hr />
                  </div>
                )}
              </div>
              <div className="body-desktop-version">
                <span className='indic'>Genres</span>
                <article>
                  {props.media.genres.map((genre, index) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                  </article>
                <div className="cristal overview-mobile">
                  {props.media.tagline && (
                    <blockquote className="tagname">
                      " {props.media.tagline}"
                    </blockquote>
                  )}
                  {props.media.overview && (
                    <div className="overview-mobile">
                      <h2>Overview</h2>
                      <p className="overview">{props.media.overview}</p>
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
                              api={props.api.POSTER}
                              key={index}
                            />
                          );
                        } else {
                          return;
                        }
                      }) : <span className='not-found'>not found</span>}
                  </div>
                )}
                  {props.media.homepage ? (
                  <p className="homepage-link">
                    You can Visit the homepage{" "}
                    <a href={`${props.media.homepage}`}>here</a>
                  </p>
                ) : <span className='not-found'>Sorry. homepage not found</span>}{" "}
              </div>
    </BodyDiv>
    </BodyContainer>
  );
};
export default Body;
