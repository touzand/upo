import styled, { keyframes } from "styled-components";
import "../index.css";
import useAxios from "../hooks/useAxios";
import { API_KEY } from "../services/api.js";
import { Link } from "react-router-dom";

const MenuSlide = keyframes`
0%{left:100%}
100%{left:0}
`;

const GenresContainer = styled.div`
  background-color: var(--primal-color);
  height: 230px;
  top: 34px;
  border-radius: 1rem;
  left: 70%;

  a {
    display: inline-block;
    padding: 0.5rem;
    border-radius: 0.10rem;
  }

  a:hover {
    background-color: white;
    color: var(--primal-color);
  }

  @media (min-width: 800px) {
    width: 400px;
  }
`;

const MenuContainer = styled.div`
  background-color: #151515;
  position: absolute;
  z-index: 2;
  top: 60px;
  width: 100%;
  height: 100vh;
  animation: ${MenuSlide} 1s ease both;

  button{
  border:none;
  background-color:transparent;
  outline:none;
  font-size:1rem;
  }

  li {
    text-align: center;
  }

  ul {
    padding: 0;
    margin: 0;
    height: 60px;
  }

  li {
    margin: 0;
    list-style: none;
    padding: 1rem;

    &:hover {
      background-color: var(--primal-color);

      div {
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    }
    div {
      display: none;
    }
  }

  @media (min-width: 800px) {
    height: initial;
    top: 1rem;
    display: flex;
    background-color: transparent;
    animation: initial;

    div {
      top: -1rem;
      position: absolute;

      div {
        top: 3.5rem;
        display: none;
        align-items: center;
        justify-content: center;

        div {
          top: 0;
          margin-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    ul {
      display: flex;
      align-items: center;
    }

    li {
      display: inline;
    }
  }
`;

const Menu = (props) => {
  const [movieGenres, movieisError, movieisLoading] = useAxios({
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    method: "get",
  });

  const [tvGenres, tvisError, tvisLoading] = useAxios({
    url: `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`,
    method: "get",
  });

  const ChangingTheme = ( ) => {
   document.body.classList.toggle("dark")
  }

  return (
    <MenuContainer>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/upo/movie/list">Movies</a>
          </li>
          <li>
            <a href="/upo/tv/list">Series and tv shows</a>
          </li>
          <li>
            Genres
            <GenresContainer>
              <div>
                {!movieisLoading &&
                  movieGenres.data.genres.map((genre, index) => (
                    <a
                      href={`/upo/genre/${genre.id}-${genre.name}`}
                      key={index}
                    >
                      {genre.name}
                    </a>
                  ))}
              </div>
            </GenresContainer>
          </li>
          <li>
            <button onClick={ChangingTheme}>Change theme</button>
          </li>
        </ul>
      </div>
    </MenuContainer>
  );
};
export default Menu;
