import styled, { keyframes } from "styled-components";
import "../index.css";

const MenuSlide = keyframes`
0%{left:100%}
100%{left:0}
`;

const MenuContainer = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  animation: ${MenuSlide} 0.5s ease both;

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

    ul {
      display: initial;
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

      ul {
        display: initial;
      }
    }

    div {
      display: none;
    }
  }
`;

const Menu = (props) => {
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
          <ul>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
            <li>genero</li>
          </ul>
        </li>
        <li>Information</li>
      </ul>
      <div onClick={() => props.setVisible(false)}></div>
    </MenuContainer>
  );
};
export default Menu;
