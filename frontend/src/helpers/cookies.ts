export const COOKIE_KEYS = {
  USER_NAME: "USER_NAME",
  USER_ID: "USER_ID",
  EMAIL: "EMAIL",
  TOKEN: "TOKEN",
}

export function setCookie(cname: string, cvalue: string | number, exdays: number = 7) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; Secure=true; SameSite=None";
}

export function getCookie(cname: string) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function checkCookie() {
  let user: string | null = getCookie("username");
  if (user !== "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user !== "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

export function isUserLoggedIn(): Boolean {
  const username = getCookie(COOKIE_KEYS.USER_NAME);
  const id = getCookie(COOKIE_KEYS.USER_ID);
  if (username && id) {
    return true
  }
  return false;
}

export const resetAllCookies = () => {
  setCookie(COOKIE_KEYS.USER_NAME, '', 0);
  setCookie(COOKIE_KEYS.EMAIL, '', 0);
  setCookie(COOKIE_KEYS.USER_ID, '', 0);
  setCookie(COOKIE_KEYS.TOKEN, '', 0);
};
