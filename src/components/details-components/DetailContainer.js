import styled from "styled-components";
import "../../index.css";

const DetailContainer = styled.div`
  background-color: white;
  color: var(--dark);

  article {
    span {
      border: thin solid;
      padding: 0.25rem 0.5rem;
      margin: 0.1rem;
      border-radius: 1rem;
    }
  }

  @media (min-width: 800px) {
    .general-body-container {
      display: flex;
    }

 
    .providers-container {
      display:flex;
      flex-direction: row;
      justify-content:space-evenly;

      div {
        background-color: transparent;

        *{
        }

        img{
        width:70px !important;
        }

        div:nth-child(2) {
          display: none;
        }
      }
    }
  }
`;

const Container = ({ children }) => (
  <DetailContainer>{children}</DetailContainer>
);
export default Container;
