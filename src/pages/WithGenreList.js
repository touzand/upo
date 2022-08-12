import styled from 'styled-components'
import {useParams} from 'react-router'
import {API_KEY} from '../services/api'
import useAxios from '../hooks/useAxios'

const GeneralContainer = styled.div`

`

const WithGenreList = props =>{
  const { genre } = useParams()

  const [response, isError, isLoading] = useAxios({
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  });

  return(
    <GeneralContainer>
      <h2>Con Genero {genre}</h2>
      {!isLoading && console.log(response)}

    </GeneralContainer>
  )
}

export default WithGenreList;
