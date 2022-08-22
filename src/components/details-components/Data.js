import styled from "styled-components";
import "../../index.css";

const DataContainer = styled.div`
  background-color: var(--dark);
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

const Data = (props) => {
  return (
    <DataContainer>
      <h2 style={{ marginLeft: "1rem" }}>Data</h2>
      <h3>Original title</h3>
      <span>{props.media.title || props.media.name}</span>
      <h3>State</h3>
      <span>{props.media.status}</span>
      <h3>Original language</h3>
      <span>{props.media.original_language}</span>
      <h3>Budget</h3>
      <span>
        {props.media.budget
          ? new Intl.NumberFormat("ud-US", {
              style: "currency",
              currency: "USD",
            }).format(props.media.budget)
          : "-"}
      </span>
      <h3>Revenue</h3>
      <span>
        {props.media.revenue
          ? new Intl.NumberFormat("ud-US", {
              style: "currency",
              currency: "USD",
            }).format(props.media.revenue)
          : "-"}
      </span>
    </DataContainer>
  );
};
export default Data;
