import {useState} from 'react'
import styled from "styled-components";
import SearchImput from '../components/SearchImput';

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
      {inputVisible && <SearchImput inputVisible={inputVisible} setInputVisible={setInputVisible}/>}
    </HeaderContainer>
  );
};
export default Header;