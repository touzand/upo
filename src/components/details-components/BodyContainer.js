import styled from "styled-components";
import { useEffect } from "react";

const BodyContainer = styled.div`
  background-image: url(${(props) => props.api}${(props) => props.backDrop});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  position: relative;

  .tagname {
    font-weight: bold;
    padding: 0.5rem;
    color: white;
    text-align: center;
    border-bottom: solid thin white;
  }

  article {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      color: white;
      border-color: white;
    }
  }

  .homepage-link a {
    padding: 0.25rem;
    background-color: whitesmoke;
    font-weight: bold;
    color: #222;
    border-radius: 0.25rem;
  }

  @media (min-width:800px){
  background-image: linear-gradient(to right,transparent,black),url(${(props) => props.api}${(props) => props.backDrop});
  }
`;

const BodyDiv = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  display:flex;

  .cristal {
    padding: 1rem;
    margin: 1rem 0;
    background-color: #0009;
  }

  .overview-desktop{
  display:none;
  }

  @media (min-width: 800px) {

    flex-grow: 2;

    .cristal{
    p{
height:100%;

    }

    }

  .overview-mobile{
  display:none;
  }

  .overview-desktop{
  display:initial;
  }

    article {
      justify-content: left;
    }

    .providers-container {
      justify-content: left;
      margin-top:1rem;
      gap: 1rem;
    }

    .cristal {
    }

    .body-desktop-version{
    display:flex;
    flex-direction:column;
    position:relative;
    padding:2rem;

    article{
    width:100%;
    }

    div{
    width:250px;

    }

    p{
    width:100%;
    }
    }

    .overview{
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    hr{
    display:none;
    }
    }
  }
`;

const Body = ({ children, backDrop, api }) => {
  return (
    <BodyContainer api={api} backDrop={backDrop}>
      <BodyDiv>{children}</BodyDiv>
    </BodyContainer>
  );
};
export default Body;
