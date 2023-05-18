import { axios } from "./axios";
import { URL } from "./urls";

export function getUserInfo(postData) {
  return axios(URL.getUserInfo, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: postData,
  });
}
