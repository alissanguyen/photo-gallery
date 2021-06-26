import * as React from "react";
import logo from "./galerie.svg";
import "./App.css";
import { useEffect } from "react";
import { getImages } from "./api/getImages";

const options = {
  perPage: 30,
  pageNumber: 1,
  sortedBy: "popular",
};

function App() {
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    getImages(options).then((newImages) => {
      setImages(newImages);
    });
  }, []);

  console.log(images);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>alerie</h1>
      </header>
      <div className="images_display">
        {images.length > 0
          ? images.map((image) => {
              return <img src={image.urls.thumb} alt="" />;
            })
          : null}
      </div>
      <div></div>
    </div>
  );
}

export default App;
