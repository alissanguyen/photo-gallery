import * as React from "react";
import logo from "./galerie.svg";
import "./App.css";
import { useEffect } from "react";
import { getImages } from "./api/getImages";
import Masonry from "react-masonry-css";

function App() {
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    getImages().then((newImages) => {
      setImages(newImages);
    });
  }, []);

  console.log(images);

  const breakpointForMasonryLayout = {
    default: 8,
    1100: 3,
    700: 3,
    500: 2,
    300: 1,
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>alerie</h1>
      </header>
      <Masonry
        breakpointCols={breakpointForMasonryLayout}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.length > 0
          ? images.map((image) => {
              return (
                <div>
                  <a href={image.links.html}>
                    <img src={image.urls.small} alt={image.alt_description} />
                  </a>
                </div>
              );
            })
          : null}
      </Masonry>
      <div></div>
    </div>
  );
}

export default App;

// TODO: Set up pagination and request photos for each page
