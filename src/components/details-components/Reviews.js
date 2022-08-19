import styled from "styled-components";
import '../../index.css'

const ReviewsContent = styled.div`
height:30rem;
overflow:hidden;
position:relative;
transition:all .4s ease-in-out;

.fade{
height:7rem;
width:100%;
position:absolute;
bottom:0;
background-image:linear-gradient(to bottom,transparent,white 60%);
}

.read-more{
background-color:var(--primal-color);
text-align:center;
height:3rem;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
color:whitesmoke;
position:sticky;
bottom:0;
cursor:pointer;
}
`;

const expandReviews = () =>{
  document.querySelector('.reviews-container').classList.toggle('expand');
}

const Reviews = ({ children }) => ( 
  <div id='e' tabIndex='1'>
  <ReviewsContent className="reviews-container">
    {children}
  <div className="fade"></div>
  <a className='read-more' href='#e' onClick={()=>expandReviews()}>read more</a>
  </ReviewsContent>

  </div>
  );
export default Reviews;
