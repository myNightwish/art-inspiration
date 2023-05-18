import AXIOS from "axios";

const CONFIG = {
  timeout: 10000,
  baseURL: "",
  headers: {
    post: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
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
