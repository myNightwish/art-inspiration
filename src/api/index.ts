import { axios } from "./axios.js";
import { URL } from "./urls.js";

export function getUserInfo(params) {
  return axios.get(URL.getUserInfo, {
    ...params,
  });
}
