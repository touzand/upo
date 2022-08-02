import styled from "styled-components";
import Header from "../components/Header";
import Scroll from "../components/main-components/Scroll";
import { api } from "../services/api";
import Loader from "../components/Loader";
import '../index.css'

const HomeContainer = styled.div`
  color: whitesmoke;
  padding-bottom: 6rem;

  h2 {
    margin-left: 1rem;
  }

  span{
  color:var(--primal-color)
  }
`;

const Home = () => (
  <HomeContainer>
    <Header endPoint={api.MOVIE_POPULAR_LIST} />
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
