import styled from "styled-components";

const SeasonContainer = styled.div`
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.25rem;
  border: thin solid grey;
`;

const Season = (props) => (
  <SeasonContainer>
    <h2>{props.name}</h2>
    <hr />
    <div>
      <span>{props.airDate}</span>
      <span> | </span>
      <span>{`${props.episodeCount} episodes`}</span>
    </div>
    <p>{props.overview}</p>
  </SeasonContainer>
);
export default Season;
