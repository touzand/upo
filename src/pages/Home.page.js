import styled from "styled-components";
import Header from "../components/Header";
import Scroll from "../components/main-components/Scroll";
import { api } from "../services/api";
import Loader from "../components/Loader";
import '../index.css'

const HomeContainer = styled.div`
  color: whitesmoke;
  padding-bottom: 4rem;

  h2 {
    margin-left: 1rem;
    font-size:1.4rem;
  }

  span{
  color:var(--primal-color)
  }

`;

const Home = props => (
  <HomeContainer>
    <Header endPoint={api.MOVIE_POPULAR_LIST}  inputVisible={props.inputVisible} setInputVisible={props.setInputVisible}/>
    {/*<Loader/>*/}
    <Scroll endPoint={api.MOVIE_POPULAR_LIST} mediaType="movie">
      <h2><span>- </span>Top movies</h2>
    </Scroll>
    <Scroll endPoint={api.TV_POPULAR_LIST} mediaType="tv">
      <h2><span>- </span>Top series and TV shows</h2>
    </Scroll>
    <Scroll endPoint={api.MOVIE_UPCOMING} mediaType="movie">
      <h2><span>- </span>Upcoming movies</h2>
    </Scroll>
    <Scroll endPoint={api.TV_TRENDINGS} mediaType="tv">
      <h2><span>- </span>Trending tv and series</h2>
    </Scroll>
    <Scroll endPoint={api.MOVIE_TRENDINGS} mediaType="movie">
      <h2><span>- </span>Trending movies</h2>
    </Scroll>
  </HomeContainer>
);
export default Home;
