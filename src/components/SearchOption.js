import styled from 'styled-components'

const Option = styled.div`
display:flex;
cursor:pointer;
padding:.25rem;
border-radius:.25rem;

&:hover{
background-color:whitesmoke;
}
`

const SearchOption = ( {props} ) =>(
  <Option>
    {props.media_type === "movie" && <article><i className="bi bi-film"></i>{props.original_title}</article>}
    {props.media_type === "tv" && <article><i className="bi bi-tv"></i>{props.name}</article>}
    {props.media_type === "person" && <article><i className="bi bi-person-fill"></i>{props.name}</article>}
  </Option> 
)
export default SearchOption
