import styled from 'styled-components'
import {useParams} from 'react-router'
import {API_KEY} from '../services/api'
import useAxios from '../hooks/useAxios'
import {api} from '../services/api'
import '../index.css'
import Perent from '../components/Percent'
import Percent from '../components/Percent'
import Loader from '../components/Loader'
import {Link} from 'react-router-dom'

const GeneralContainer = styled.div`
color:white;

a{
color:white;
}
`

const GenreItem = styled.div`
background-color:var(--dark-90);
margin:.5rem;
display:flex;


img{
width:120px;
height:180px;
}

div:nth-child(2){
padding:.5rem 1rem;


h4{
margin:0;
}

p{

margin:1rem 0 ;
}

}

`

const WithGenreList = props =>{
  const { genre } = useParams()
  const [response, isError, isLoading] = useAxios({
    url: `/discover/movie?api_key=${API_KEY}&with_genres=${genre}`,
  });

  return(
    <GeneralContainer>
      <div>
        {isLoading ? <Loader/> : response.data.results.map(( movie,index )=>
          <Link to={`/upo/movie/${movie.id}`} key={index}>
          <GenreItem key={index}>
            <img src={`${api.POSTER}${movie.poster_path}`}/>
            <div>
              <h4>{ movie.title }</h4>
              <p>{movie.release_date}</p>
              <Percent>{movie.vote_average}</Percent>
            </div>
            </GenreItem>
          </Link>
          )}
      </div>

    </GeneralContainer>
  )
}

export default WithGenreList;
