import styled from 'styled-components'
import { API_KEY,api } from "../../services/api";
import useAxios from "../../hooks/useAxios";
import Scroll from "../details-components/ScrollContainer";
import {Link} from 'react-router-dom'
import Percent from '../Percent'

const RecomendationContainer = styled.div`

img{
width:240px;
margin-left:1rem;
border-radius:.5rem;
}

div{
display:flex;
justify-content:space-evenly;
text-align:center;
align-items:center;

h5{
margin:0;
}
}
`

const Recomendation = props =>{
  const [response, isError, isLoading] = useAxios({
    url: `/${props.mediaType}/${props.id}/recommendations?api_key=${API_KEY}&language=en-US`,
  });

  return(
    <div style={{marginBottom:'1rem'}}>
      {!isLoading && response.data.results.length !== 0 &&

    <div>
    <h3 style={{paddingLeft:'1rem'}}>Recomendation</h3>
    <Scroll paddingRight={props.paddingRight}>
      {!isLoading && response.data.results.map(media=>
        <RecomendationContainer key={media.id}>
          <a href={`../${props.mediaType}/${media.id}`}>
          <img src={`${api.POSTER}${media.backdrop_path}`}/>
        </a>
        <div>
          <h5>{media.title || media.name}</h5>
          <Percent>
            {media.vote_average}
          </Percent>
        
        </div>
        </RecomendationContainer>
        )}
      </Scroll>
    </div>
      }
    </div>
  )
}
export default Recomendation
