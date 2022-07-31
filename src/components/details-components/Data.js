import styled from "styled-components";
import '../../index.css'

const DataContainer = styled.div`
  background-color:var(--dark);
  color: white;
  width: 100%;
  height: auto;
  padding: 2rem 3rem;

  h3 {
    margin-top: 2rem;
    margin-bottom: 0;
  }

  span {
    margin-bottom: 2rem;
  }
`;

const Data = ({ children }) => <DataContainer>{children}</DataContainer>;
export default Data;
