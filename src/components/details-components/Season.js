import styled from 'styled-components'

const SeasonContainer = styled.div`
margin:1rem;
padding:1rem;
-webkit-box-shadow: 0px 0px 22px -7px #000000; 
box-shadow: 0px 0px 20px -7px #000000;
border-radius:.5rem;

`

const Season = props =>(
  <SeasonContainer>
    <h2>{props.name}</h2>
    <hr/>
    <div>
      <span>{props.airDate}</span>
      <span> | </span>
      <span>{`${props.episodeCount} episodes` }</span>
    </div>
    <p>{ props.overview }</p>
  </SeasonContainer>
)
export default Season 
