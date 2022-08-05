import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import SearchOption from "./SearchOption";
import '../index.css'

const InputContainerVisible = keyframes`
0%{top:90vh}
100%{top:0}
`;

const SearchQueryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--dark);
`;

const InputContainer = styled.div`
  z-index: 2;
  width: 100%;
  padding: 0.5rem;
  position: fixed;
  background-color: var(--dark);
  animation: ${InputContainerVisible} 1s ease both;

  hr{
  border:thin solid grey;
  }

  .input-container {
    & * {
      font-size: 1rem;
      color:grey;
    }
    div {
      padding: 0.5rem;
      border-radius: 0.5rem;
  background-color: var(--dark-70);
    }
  }

  div {
    display: flex;
    justify-content: space-between;

    button {
      width: 70px;
      border: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
    }

    div {
      flex-grow: 1;
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

  @media(min-width: 800px){
  width:400px;
  position:absolute;
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
      <div className="input-container">
        <div>
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
      <SearchQueryContainer>
        {queryOpctions.map((propis) => (
          <SearchOption
            props={propis}
            key={propis.id}
            setInputVisible={props.setInputVisible}
            inputVisible={props.inputVisible}
          />
        ))}
      </SearchQueryContainer>
    </InputContainer>
  );
};
export default SearchInput;
