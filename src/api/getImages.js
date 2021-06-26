import axios from "axios";


export async function getImages(options) {
  const images = await axios.get(
    `https://api.unsplash.com/photos/?client_id=YRbuNnP_yFZip_YLxfeMzrmUg5w-ryxVdxviuBVFc9Y${
      options ? `&per_page=${options.perPage}` : ""
    }`
  , {
      
  });

  return images.data;
}
