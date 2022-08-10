import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.page";
import Nav from "./Nav";
import Details from "../pages/Details.page";
import YoutubeIframe from "./details-components/YoutubeIframe";

const Router = () => {
  const [inputVisible, setInputVisible] = useState(false);
  return (
    <BrowserRouter>
      <Nav inputVisible={inputVisible} setInputVisible={setInputVisible} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              inputVisible={inputVisible}
              setInputVisible={setInputVisible}
            />
          }
        />
        <Route
          path="upo/movie/:id"
          exat
          element={<Details mediaType="movie" />}
        />
        <Route
          path="upo/movie/:id/:key"
          exat
          element={
            <Details mediaType="movie">
              <YoutubeIframe />
            </Details>
          }
        />
        <Route path="upo/tv/:id" element={<Details mediaType="tv" />} />
        <Route
          path="upo/tv/:id/:key"
          exat
          element={
            <Details mediaType="tv">
              <YoutubeIframe />
            </Details>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
