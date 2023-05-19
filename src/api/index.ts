import { axios } from "./axios";
import { URL } from "./urls";

export function getUserRegister(postData) {
  return axios(URL.getUserInfo, {
    method: "post",
    data: postData,
  });
}

export function getUserLogin(postData) {
  // 这个必须加鉴权能力，请求头携带过去
  return axios(URL.getUserLogin, {
    method: "post",
    data: postData,
  });
}
