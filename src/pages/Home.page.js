import styled from 'styled-components'
import Header from '../components/Header'
import Popular from '../components/main-components/Popular.section'
import Advance from '../components/main-components/Advance.section'
import Trending from '../components/main-components/Trending.section'

const HomeContainer = styled.div`
`

const Home = () =>(
  <HomeContainer>
    <Header/>
    <Popular/>
    <Advance/>
    <Trending/>
  </HomeContainer> 
)
export default Home;
