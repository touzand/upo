import styled from "styled-components";
import {API_KEY} from '../../services/api'
import useAxios from '../../hooks/useAxios'

const ImagesContainer = styled.div`

`

const MediaImages = props =>{
  const [response, isError, isLoading] = useAxios({
    url: `/${props.mediaType}/${props.id}/images?api_key=${API_KEY}&language=en-US`,
  });

  
  return(

    <ImagesContainer>
      {!isLoading && console.log(response)}
    </ImagesContainer>
  )
}
export default MediaImages
