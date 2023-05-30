import AXIOS from "axios";
import { getCookie } from "@/utils/cookie";

const CONFIG = {
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 10000,
  baseURL: "",
  headers: {
    post: {
      "Content-Type": "application/json",
    },
    Authorization: `Bearer ${getCookie("access_token")}`,
    common: {
      "X-Requested-With": "XMLHttpRequest",
    },
  },
  responseType: "json",
  transformRequest: [
    function (data) {
      if (typeof data === "string") {
        return data;
      }
      return JSON.stringify(data);
    },
  ],
};

// axios实例
export const axios = AXIOS.create(CONFIG);
