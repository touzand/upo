import styled from 'styled-components'

const InputContainer = styled.input`
padding:.5rem;

`
const SearchImput = () =>(
  <InputContainer>
    <input type="search" placeholder='Search...'/>
  </InputContainer>
)
export default SearchImput
