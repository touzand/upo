import { useState } from "react";
import styled, { keyframes } from "styled-components";
import SearchOption from "./SearchOption";
import "../index.css";

const InputContainerVisible = keyframes`
0%{top:90vh}
100%{top:0}
`;

const SearchQueryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dark);

  div{
  height:initial !important;
  }
`;

const InputContainer = styled.div`
  z-index: 2;
  width: 100%;
  padding: 0.5rem;
  position: fixed;
  background-color: var(--dark);
  animation: ${InputContainerVisible} 1s ease both;

  .bg {
    display: flex;
    flex-direction: column;
  }

  hr {
    border: thin solid grey;
    opacity:0;
  }

  .input-container {
    & * {
      font-size: 1rem;
      color: grey;
    }
    div {
    width:100%;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: var(--dark-70);
    }
  }

  div {
    display: flex;

    button {
      width: 70px;
      border: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
    }


    div:nth-child(3){
    height:100vh;

    }

    div {
      background-color: var(--dark);

      i {
        color: grey;
        margin: 0 0.5rem;
      }

      input {
        width: 100%;
        border: none;
        outline: none;
        background-color: transparent;
      }
    }
  }

  @media (min-width: 800px) {
    .bg {
      display: flex;
      flex-direction: column;
      background-color: #15151599;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: start;
      align-items: center;
      animation: ${InputContainerVisible} 1s ease both;
      padding: 4rem 0;
      backdrop-filter:blur(1rem);

      div {
        width: 500px;
        position: relative;
      }

      .padding {
        height: 400px;
        display: flex;
        flex-direction: column;
      }

      hr {
        display: none;
      }
    }

    .input-container {
      padding: 0.5rem;
    }

    .input-top-container {
      height: 40px;
    }

    div:nth-child(2) {
    }
  }
`;

const SearchInput = (props) => {
  const [queryOpctions, setQueryOptions] = useState([]);

  const HandleSearch = (e) => {
    if (e.currentTarget.value === "") {
      return;
    } else {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=8e78295ff9a0d66c6596e756caa8add1&language=en-US&query=${e.currentTarget.value}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setQueryOptions(data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <InputContainer>
      <div className="bg" onClick={() => props.setInputVisible(false)}>
        <div className="input-container">
          <div className="input-top-container">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              onChange={HandleSearch}
            />
          </div>
          <button onClick={() => props.setInputVisible(false)}>Cancel</button>
        </div>
        <hr />
        <SearchQueryContainer className="query">
          {queryOpctions.map((propis) => (
            <SearchOption
              props={propis}
              key={propis.id}
              setInputVisible={props.setInputVisible}
              inputVisible={props.inputVisible}
            />
          ))}
        </SearchQueryContainer>
      </div>
    </InputContainer>
  );
};
export default SearchInput;
