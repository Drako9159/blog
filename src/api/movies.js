import axios from "../libs/movies";
const api_key = "819b01ed346caef6fa382aec7fa78ab5"

///movie/550?api_key="
const image = "https://image.tmdb.org/t/p/w500/"



export async function getTrending(page) {
  return await axios.get(`/trending/all/day?api_key=${api_key}&language=es&include_image_language=es,null&page=${page}`);
}
///search/movie?api_key=819b01ed346caef6fa382aec7fa78ab5&language=es&query=The+Last+Of
//https://api.themoviedb.org/3/trending/all/day?api_key=819b01ed346caef6fa382aec7fa78ab5&language=es



