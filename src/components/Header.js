import { useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import useAxios from "../hooks/useAxios";
import {api} from "../services/api"

const HeaderContainer = styled.header`
  text-align: center;
  background-image:linear-gradient(to top,black,#2228),url( ${props => props.api}${props=>props.backgroundPath} );
  color:white;
  font-weight:bold;
  background-size: cover;
  background-position:center;
  background-repeat:no-repeat
  width:100%;
  height:200px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  p::before {
    content: "Hi! Welcome to ";
  }

  button{
  width:150px;
  padding:.5rem;
  }

  div{
  backdrop-filter: blur(.5rem);

  }
`;

const Header = (props) => {
  const [inputVisible, setInputVisible] = useState(false);

  const [response, isError, isLoading] = useAxios({
    url: props.endPoint,
    method: "get",
  });

  return (
    <div>
      {!isLoading && 
          <HeaderContainer backgroundPath={response.data.results[ Math.floor(Math.random() * response.data.results.length) ].backdrop_path} api={api.POSTER}>
      <p>UPO</p>
      <button onClick={() => setInputVisible(true)}>Quick search</button>
      {inputVisible && (
        <SearchBar
          inputVisible={inputVisible}
          setInputVisible={setInputVisible}
        />
      )}
    </HeaderContainer>
      }
    </div>
  );
};
export default Header;
