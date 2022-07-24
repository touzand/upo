import styled from "styled-components";

const DetailContainer = styled.div`
  article {
    span {
      border: thin solid ;
      padding: 0.25rem 0.5rem;
      margin: 0.1rem;
      border-radius: 1rem;
    }
  }
`;

const Container = ({ children }) => (
  <DetailContainer>{children}</DetailContainer>
);
export default Container;
