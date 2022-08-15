import styled from "styled-components";
import { useParams } from "react-router";
import { API_KEY } from "../services/api";
import useAxios from "../hooks/useAxios";
import { api } from "../services/api";
import "../index.css";
import Percent from "../components/Percent";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const GeneralContainer = styled.div`
  color: white;
  display: initial;

  a {
    color: white;
  }

  @media (min-width: 800px) {

.margin{
margin:0 11vw ;
}

    div:nth-child(2) {
      padding-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

const Header = styled.div`
  background-image: linear-gradient(to top, var(--dark), #2228),
    url(${(props) => api.POSTER}${(props) => props.backgroundPath});
  with: 100%;

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

const GenreItem = styled.div`
  background-color: var(--dark-90);
  margin: 0.5rem;
  display: flex;

  img {
    width: auto;
    height: 170px;
  }

  div:nth-child(2) {
    padding: 0.5rem 1rem;

    h4 {
      margin: 0;
    }

    p {
      margin: 1rem 0;
    }
  }

  @media (min-width: 800px) {
    width: 400px;
    position: relative;
    transition: transform 0.1s ease-in-out;

    img{
    height:200px
    }

    div {
      flex-direction: column;

      span {
        width: 50px;
      }
    }

    &:hover {
      transform: scale(1.1);
      z-index: 2;
      background-color: var(--dark-80);
    }
  }
`;

let randomMediaIndex = Math.floor(Math.random() * 19);

const WithGenreList = (props) => {
  const { genre, genrename } = useParams();
  const [response, isError, isLoading] = useAxios({
    url: `/discover/movie?api_key=${API_KEY}&with_genres=${genre}`,
  });

  return (
    <GeneralContainer>
      {!isLoading && (
        <Header
          backgroundPath={response.data.results[randomMediaIndex].backdrop_path}
        >
          <div>
            <h2>Movies with the genre</h2>
            <h1>{genrename}</h1>
            <span>{genre}</span>
          </div>
        </Header>
      )}

      <div className='margin'>
        {isLoading ? (
          <Loader />
        ) : (
          response.data.results.map((movie, index) => (
            <Link to={`/upo/movie/${movie.id}`} key={index}>
              <GenreItem key={index}>
                <img src={`${api.POSTER}${movie.poster_path}`} />
                <div>
                  <h4>{movie.title}</h4>
                  <p>{movie.release_date}</p>
                  <Percent>{movie.vote_average}</Percent>
                </div>
              </GenreItem>
            </Link>
          ))
        )}
      </div>
    </GeneralContainer>
  );
};

export default WithGenreList;
