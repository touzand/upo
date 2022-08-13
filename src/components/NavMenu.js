import styled, { keyframes } from "styled-components";
import "../index.css";
import useAxios from "../hooks/useAxios";
import { API_KEY } from "../services/api.js";

const MenuSlide = keyframes`
0%{left:100%}
100%{left:0}
`;

const GenresContainer = styled.div`
  display: flex;

  h4 {
    margin-bottom: 0.5rem;
  }

  a {
    text-align: left !important;
    font-weight: bold !important;
    color: #0008 !important;
    display: inline-block !important;
    border-radius: 0.25rem !important;
    border: solid thin #0008 !important;
    padding: 0.5rem !important;
    margin: 0.2rem !important;
  }

  @media (min-width:800px){
  div{

  width:200px !important;
  }
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  background-color:transparent;
  animation: ${MenuSlide} 0.5s ease both;
  position:fixed;

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    background-color: var(--dark-90);
    padding: 1rem;
  }

  li > ul {
    display: none;
  }
  li > ul > li {
    padding: 0;
  }

    li:hover {
      background-color: var(--primal-color);

      div {
        display: initial;
        }
      }
    }

  div {
    background-color: #0009;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(0.5rem);
  }

  @media (min-width: 800px) {
    left: initial;
    width: auto;
    animation: initial;

    ul {
      display: flex;
      padding: 0;
      margin: 0;
    }

    li {
      list-style: none;
      background-color: transparent;
    }

    li > ul {
      display: none;
    }

    li:hover {
      background-color: var(--primal-color);

      div {
        display: initial;
        }
      }
    }

    div {
      display: none;
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

  return (
    <MenuContainer>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>Movies</li>
        <li>Series</li>
        <li>
          Genres
          <GenresContainer>
            <div>
              <h4>Movies</h4>
              <ul>
                {!movieisLoading &&
                  movieGenres.data.genres.map((genre) => (
                    <a href={`/upo/genre/${genre.id}`}>{genre.name}</a>
                  ))}
              </ul>
            </div>
          </GenresContainer>
        </li>
        <li>Information</li>
      </ul>
      <div onClick={() => props.setVisible(false)}></div>
    </MenuContainer>
  );
};
export default Menu;
