import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9844dab2e6b4409d9b33c7375b562d52",
  },
});
