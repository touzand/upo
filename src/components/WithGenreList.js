import styled from 'styled-components'
import {useParams} from 'react-router'

const GeneralContainer = styled.div`

`

const WithGenreList = props =>{
  const { genre } = useParams()

  return(
    <GeneralContainer>
      <h2>Con Genero {genre}</h2>

    </GeneralContainer>
  )
}

export default WithGenreList;
