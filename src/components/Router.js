import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/Home.page'
import Nav from './Nav'
import Details from '../pages/Details.page'

const Router = () => (
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/movie/:id" element={<Details mediaType='movie'/>} />
      <Route path="/tv/:id" element={<Details mediaType='tv'/>} />
    </Routes>
  </BrowserRouter>
)
export default Router;
