import styled, { keyframes } from "styled-components";

const InputContainerVisible = keyframes`
0%{top:90vh}
100%{top:0}
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  position: absolute;
  background-color: #ddd;
  animation: ${InputContainerVisible} 1s ease both;

  div {
    display: flex;
    justify-content: space-between;

    button {
      width: 70px;
      border:none;
      background-color:transparent;
      outline:none;
      cursor:pointer;
    }

    div {
      flex-grow: 1;

      input {
        width: 100%;
        border:none;
        outline:none;
      }
    }
  }
`;

const SearchInput = props => (
  <InputContainer>
    <div>
      <div>
        <i className="bi bi-search"></i>
        <input type="text" placeholder="Search..." autoFocus/>
      </div>
      <button onClick={()=>props.setInputVisible(false)}>Cancel</button>
    </div>
    <div>Content</div>
  </InputContainer>
);
export default SearchInput;
