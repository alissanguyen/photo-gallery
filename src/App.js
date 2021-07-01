import * as React from "react";

import "./design/App.css";
import { useEffect } from "react";
import { getImages } from "./api/getImages";
import { queryImages } from "./api/queryImages";
import Masonry from "react-masonry-css";
import SearchBar from "./components/TopBar";

function App() {
  const [images, setImages] = React.useState([]);

  const [pageNumber, setPageNumber] = React.useState(1);

  useEffect(() => {
    getImages(pageNumber).then((newImages) => {
      console.log(newImages);
      setImages((prev) => {
        return prev.concat(newImages);
      });
    });
  }, [pageNumber]);

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
      <SearchBar
        onSubmit={(searchInput) => {
          queryImages(searchInput).then((result) => {
            console.log(result);
            setImages(result);
          });
        }}
      />

      
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

      <div id="button_container">
        <button
          onClick={() => setPageNumber((prev) => prev + 1)}
          class="load_more_button"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
