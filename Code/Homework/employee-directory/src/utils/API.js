import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

const API = axios.get(BASEURL).then((res) => {
  console.log(res.data.results[1].name.first);
});
export default API;
