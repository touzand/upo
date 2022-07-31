import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Option = styled.div`
display:flex;
cursor:pointer;
padding:.25rem;
border-radius:.25rem;
text-decoration:none;
color:white;
width:100%;

&:hover{
background-color:var(--dark-70);
}
`

const SearchOption = ( {props} ) =>(
  <div>
    {props.media_type === "movie" && <a href={`/upo/movie/${props.id}`}><Option><i className="bi bi-film"></i>{props.original_title}</Option></a>}
    {props.media_type === "tv" && <a href={`/upo/tv/${props.id}`}><Option><i className="bi bi-tv"></i>{props.name}</Option></a>}
    {props.media_type === "person" && <a href={`/upo/person/${props.id}`}><Option><i className="bi bi-person-fill"></i>{props.name}</Option></a>}
  </div>
)
export default SearchOption
