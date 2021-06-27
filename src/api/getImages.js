import axios from "axios";

const CLIENT_ID = `YRbuNnP_yFZip_YLxfeMzrmUg5w-ryxVdxviuBVFc9Y`;

const DEFAULT_QUERY_PARAMS = {
  perPage: 30,
  sortedBy: "popular",
};

export async function getImages({ pageNumber = 1 }) {
  let allImages = [];

  for (let i = pageNumber; i < pageNumber + 2; i++) {
    const imagesOnCurrentPage = await axios.get(
      `https://api.unsplash.com/photos`,
      {
        params: {
          per_page: DEFAULT_QUERY_PARAMS.perPage,
          order_by: DEFAULT_QUERY_PARAMS.sortedBy,
          client_id: CLIENT_ID,
          page: i,
        },
      }
    );

    allImages = allImages.concat(imagesOnCurrentPage.data);
  }

  return allImages;
}
