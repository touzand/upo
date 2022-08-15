import styled from "styled-components";
import "../../index.css";

const DetailContainer = styled.div`
  background-color: white;
  color: var(--dark);
  overflow-y:hidden;

  article {
    span {
      border: thin solid;
      padding: 0.25rem 0.5rem;
      margin: 0.1rem;
      border-radius: 1rem;
    }
  }

  @media (min-width: 800px) {
display:flex;
flex-direction:column;
  justify-content:center;
align-items:center;

    .general-body-container {
      display: flex;
      min-height:600px;
      max-height:auto;

    }

    .providers-container {
      display: flex;
      flex-direction:column;
      justify-content: left;

      div {

        * {
        }

        img {
          width: 70px !important;
        }

        div:nth-child(2) {
        }
      }
    }

    .details-info{
    max-width:900px;
    min-width:auto;
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:center;


      ::-webkit-scrollbar-thumb{
      background-color:red;
      }
    }

  }
`;

const Container = ({ children }) => (
  <DetailContainer>{children}</DetailContainer>
);
export default Container;
