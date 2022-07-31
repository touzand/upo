import styled from "styled-components";

const ScrollContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  padding-right:${props=>props.paddingRight};
  padding-bottom:1rem;
`;

const Scroll = ({ children,paddingRight }) => (
  <ScrollContainer paddingRight={paddingRight}>{children}</ScrollContainer>
);
export default Scroll;
