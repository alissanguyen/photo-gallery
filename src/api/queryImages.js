import axios from "axios";
import { BASE_UNSPLASH_URL } from "./constants";

const CLIENT_ID = `YRbuNnP_yFZip_YLxfeMzrmUg5w-ryxVdxviuBVFc9Y`;

const DEFAULT_SEARCHBAR_PARAMS = {
  query: "",
  page: 1,
  perPage: 30,
};

export async function queryImages(searchTerm) {
  const searchResults = await axios.get(
    `${BASE_UNSPLASH_URL}/search/collections`,
    {
      params: {
        query: DEFAULT_SEARCHBAR_PARAMS.searchTerm,
        per_page: DEFAULT_SEARCHBAR_PARAMS.perPage,
        page: DEFAULT_SEARCHBAR_PARAMS.page,
        client_id: CLIENT_ID,
      },
    }
  );
    console.log("query images!")
  return searchResults;
}
