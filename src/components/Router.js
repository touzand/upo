import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/Home.page'
import Nav from './Nav'
import MovieDetails from '../pages/MovieDetails.page'
import TvDetails from '../pages/TvDetails.page'

const Router = () => (
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/movie/:id" element={<MovieDetails/>} />
      <Route path="/tv/:id" element={<TvDetails/>} />
    </Routes>
  </BrowserRouter>
)
export default Router;
