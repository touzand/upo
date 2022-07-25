import styled from "styled-components";

const ScrollContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
`;

const Scroll = ({ children }) => (
  <ScrollContainer>{children}</ScrollContainer>
);
export default Scroll;
