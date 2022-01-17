import Cookies from "js-cookie";
import qs from "qs";

const BASE_URL = "https://api.b7web.com.br/devsfood/api";

const apiFetchGet = async (endpoint, body = []) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }

  const res = await fetch(`${BASE_URL + endpoint}?${qs.stringify(body)}`);
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }
  return json;
};

const API = () => {
  return {
    getCategories: async () => {
        const json = await apiFetchGet("/categories");
        return json;
    },
    getProducts: async (options) => {
      const json = await apiFetchGet("/products", options);
      return json;
    }
  };
};

export default API;
