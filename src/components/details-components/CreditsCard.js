import styled from "styled-components";

const CreditCard = styled.div`
  margin-left: 1rem;
  background-color: #0003;
  border-radius: 1rem;
  width: 125px;

  .text-content {
    padding: 1rem;
  }

  img {
    width: 125px;
  }

  h5 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    color: #0007;
  }
`;

const Card = (props) => (
  <CreditCard>
    <img src={`${props.api}${props.photo}`} />
    <div className="text-content">
      <h5>{props.name}</h5>
      <p>As {props.character}</p>
    </div>
  </CreditCard>
);
export default Card;
