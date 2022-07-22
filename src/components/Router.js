import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/Home.page'
import Nav from './Nav'

const Router = () => (
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" exact element={<Home/>} />
    </Routes>
  </BrowserRouter>
)
export default Router;
