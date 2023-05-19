import type { AxiosPromise } from "axios";
import { axios } from "./axios";
import { URL } from "./urls";

export function getUserRegister(postData): AxiosPromise<any> {
  return axios(URL.getUserInfo, {
    method: "post",
    data: postData,
  });
}

export function getUserLogin(postData): AxiosPromise<any> {
  // 这个必须加鉴权能力，请求头携带过去
  return axios(URL.getUserLogin, {
    method: "post",
    data: postData,
  });
}
