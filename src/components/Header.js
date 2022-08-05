import { useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import useAxios from "../hooks/useAxios";
import {api} from "../services/api"
import '../index.css'

const HeaderContainer = styled.header`
  text-align: left;
  background-image:linear-gradient(to top,var(--dark),#2228),url( ${props => props.api}${props=>props.backgroundPath} );
  color:white;
  font-weight:bold;
  background-size: cover;
  background-position:center;
  background-repeat:no-repeat
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:left;
  justify-content:center;
  margin-bottom:4rem;

  p::before {
  }

  button{
  width:150px;
  padding:.5rem;
  background-color:var(--primal-color);
  border:none;
  color:white;
  }

  div{
  backdrop-filter: blur(.5rem);

  }

  .desktop-bg-information{
  padding:1rem;
  }

  .bg-information{
  display:none;
  }

  @media (min-width:800px){
  background-image:linear-gradient(to right,var(--dark),#2228),url( ${props => props.api}${props=>props.backgroundPath} );

  h1{
  width:400px;
  }

  button{
  margin-bottom:2rem;
  }

  .bg-information{
  display:block;
  text-align:right;
  }
  
  .desktop-bg-information{
display:flex;
justify-content:space-between;
  padding:0 4rem;
  }

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
            <div className="desktop-bg-information">
            <div>
      <h1>A massive information base about a lot of movies and tv shows</h1>
      <button onClick={() => props.setInputVisible(true)}>Quick search</button>
    </div>
    <div className="bg-information">
      <h4>Hola mundo locoo</h4>

    </div>
            </div>
      {inputVisible && (
        <SearchBar
          inputVisible={props.inputVisible}
          setInputVisible={props.setInputVisible}
        />
      )}
    </HeaderContainer>
      }
    </div>
  );
};
export default Header;
