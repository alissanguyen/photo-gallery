import * as React from "react";
import logo from "./galerie.svg";
import "./App.css";

function App() {
  const axios = require("axios");

  const [images, setImages] = React.useState([]);

  const handleButtonClick = async () => {
    const images = await axios.get(
      `https://api.unsplash.com/photos/?client_id=YRbuNnP_yFZip_YLxfeMzrmUg5w-ryxVdxviuBVFc9Y`
    );

    setImages(images.data);
  };

  console.log(images);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>alerie</h1>
      </header>
      {images.length > 0
        ? images.map((image) => {
            return <img src={image.urls.thumb} />;
          })
        : null}
      <div>
        <button onClick={handleButtonClick}>Get images</button>
      </div>
    </div>
  );
}

export default App;
