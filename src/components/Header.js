import {useState} from 'react'
import styled from "styled-components";
import SearchBar from '../components/SearchBar';

const HeaderContainer = styled.header`
  text-align: center;

  p::before {
    content: "Hi! Welcome to ";
  }
`;

const Header = () => {
const [inputVisible,setInputVisible] = useState(false)

  return (
    <HeaderContainer>
      <p>UPO</p>
<button onClick={()=>setInputVisible(true)}>Quick search</button>
      {inputVisible && <SearchBar inputVisible={inputVisible} setInputVisible={setInputVisible}/>}
    </HeaderContainer>
  );
};
export default Header;
