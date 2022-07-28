import styled from 'styled-components'
import Header from '../components/Header'
import Scroll from '../components/main-components/Scroll'
import {api} from '../services/api'

const HomeContainer = styled.div`
background-color:black;
color:whitesmoke;

h2{
margin-left:1rem;
}
`

const Home = () =>(
  <HomeContainer>
    <Header endPoint={api.MOVIE_POPULAR_LIST}/>
    <Scroll endPoint={api.TRENDING_MOVIE} mediaType="movie"><h2>Top movies</h2></Scroll>
    <Scroll endPoint={api.TRENDING_TV} mediaType="tv"><h2>Top series and TV shows</h2></Scroll>
  </HomeContainer> 
)
export default Home;
