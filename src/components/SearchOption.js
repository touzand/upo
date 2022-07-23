import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Option = styled.div`
display:flex;
cursor:pointer;
padding:.25rem;
border-radius:.25rem;
color:black;
text-decoration:none;
width:100%;

&:hover{
background-color:whitesmoke;
}

a{
}
`

const SearchOption = ( {props} ) =>(
  <div>
    {props.media_type === "movie" && <Link to={ `/movie/${props.id}` }><Option><i className="bi bi-film"></i>{props.original_title}</Option></Link>}
    {props.media_type === "tv" && <Link to={`/tv/${props.id}`}><Option><i className="bi bi-tv"></i>{props.name}</Option></Link>}
    {props.media_type === "person" && <Link to={`/person/${props.id}`}><Option><i className="bi bi-person-fill"></i>{props.name}</Option></Link>}
  </div>
)
export default SearchOption
