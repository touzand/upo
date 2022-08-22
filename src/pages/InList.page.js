import styled from "styled-components";
import { api, API_KEY } from "../services/api";
import useAxios from "../hooks/useAxios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const GeneralContainer = styled.div`
  color: white;

  div:nth-child(2) {
    margin: initial;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (min-width: 800px) {
    div:nth-child(2) {
      margin: 0 11vw;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;
const Header = styled.div`
  background-image: linear-gradient(to top, var(--dark), #2228),
    url(${api.POSTER}${(props) => props.backgroundPath});
  with: 100%;
  color: white;

  .inlist-header {
    margin-bottom: 2rem;
  }

  div:nth-child(1) {
    backdrop-filter: blur(1rem);
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      margin: 0;
      color: #ddd2;
    }

    h1 {
      margin: 0.5rem;
    }

    span {
      color: #ddd2;
    }
  }
`;

const InListItem = styled.div`
  transition: transform 0.1s ease-in-out;

  img {
    width: 170px;
    height: auto;
    border-radius: 0.25rem;
  }

  div:nth-child(2) {
    display: none;
  }

  &:hover {
    transform: scale(1.2);
    z-index: 2;
  }
`;

let randomMediaIndex = Math.floor(Math.random() * 19);

const InList = (props) => {
  const [response, isError, isLoading] = useAxios({
    url: `/${props.mediaType}/popular?api_key=${API_KEY}&language=en-US&page=1`,
  });

  return (
    <GeneralContainer>
      {!isLoading && (
        <Header
          backgroundPath={response.data.results[randomMediaIndex].backdrop_path}
        >
          <div className="inlist-header">
            <h2>Most pupular</h2>
            <h1>
              {props.type[0].toUpperCase()}
              {props.type.substring(1)}
            </h1>
          </div>
        </Header>
      )}

      <div>
        {isLoading ? (
          <Loader />
        ) : (
          response.data.results.map((media, index) => (
            <Link to={`/upo/${props.mediaType}/${media.id}`} key={index}>
              <InListItem>
                <img src={`${api.POSTER}${media.poster_path}`} />
                <div>
                  <h4>{media.title || media.name}</h4>
                </div>
              </InListItem>
            </Link>
          ))
        )}
      </div>
    </GeneralContainer>
  );
};
export default InList;
