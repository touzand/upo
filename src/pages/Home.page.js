import styled from 'styled-components'
import Header from '../components/Header'
import Scroll from '../components/main-components/Scroll'
import {api} from '../services/api'

const HomeContainer = styled.div`
`

const Home = () =>(
  <HomeContainer>
    <Header endPoint={api.MOVIE_POPULAR_LIST}/>
    <Scroll endPoint={api.TRENDING}>
      <h2>Trending</h2>
    </Scroll>
    <Scroll endPoint={api.TV_POPULAR_LIST}>
      <h2>Series and TV shows</h2>
    </Scroll>
  </HomeContainer> 
)
export default Home;
