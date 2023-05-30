// 存储 cookie
export function setCookie(
  name: string,
  value: string,
  expires: number = 1,
  path: string = "/"
) {
  const d = new Date();
  d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000); // 过期时间，单位是毫秒
  const expiresStr = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value};${expiresStr};path=${path}`;
}

// 读取 cookie
export function getCookie(name: string) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}
