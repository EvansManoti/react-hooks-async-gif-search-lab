import React from "react";

import NavBar from "./NavBar";
import GifSearch from "./GifSearch";
import GifListContainer from "./GifListContainer";
import GifList from "./GifList";
// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer/>
      <GifList/>
    </div>
  );
}

export default App;
