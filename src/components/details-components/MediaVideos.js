import styled from "styled-components";
import {API_KEY} from '../../services/api'
import useAxios from '../../hooks/useAxios'

const VideosContainer = styled.div`

`

const MediaVideos = props =>{
  const [response, isError, isLoading] = useAxios({
    url: `/${props.mediaType}/${props.id}/videos?api_key=${API_KEY}&language=en-US&page=1`,
  });

  return(
    <VideosContainer>
      {!isLoading && console.log(response)}
    </VideosContainer>
  )
}

export default MediaVideos
