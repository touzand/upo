import styled, { keyframes } from "styled-components";
import "../index.css";
import useAxios from "../hooks/useAxios";
import { API_KEY } from "../services/api.js";

const MenuSlide = keyframes`
0%{left:100%}
100%{left:0}
`;

const GenresContainer = styled.div`
    background-color:var(--primal-color);
    width:400px;
    height:300px;
    top:34px;
    border-radius:1rem;
    left:4rem;

    a{
    }

    a:hover{
    background-color:white;
    color:var(--primal-color);
    
    }
`;

const MenuContainer = styled.div`
  background-color: #151515;
  position: absolute;
  z-index: 2;
  top: 60px;
  width: 100%;
  height: 100vh;

  li {
    text-align: center;
  }

  ul {
    padding: 0;
    margin: 0;
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
        gap: 1rem;
        flex-wrap: wrap;
      }
    }
    div {
      display: none;
    }
  }

  a {
    display: inline-block;
  }

  @media (min-width: 800px) {
    top:1rem;
    display: flex;
    background-color: transparent;

    div{
    position:absolute;
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

  return (
    <MenuContainer>
      <div onClick={() => props.setVisible(false)}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/">Series and tv shows</a>
          </li>
          <li>
            Genres
            <GenresContainer>
              <div>
                {!movieisLoading &&
                  movieGenres.data.genres.map((genre) => (
                    <a href={`/upo/genre/${genre.id}`}>{genre.name}</a>
                  ))}
              </div>
            </GenresContainer>
          </li>
          <li>
            <a href="/">Information</a>
          </li>
        </ul>
      </div>
    </MenuContainer>
  );
};
export default Menu;
