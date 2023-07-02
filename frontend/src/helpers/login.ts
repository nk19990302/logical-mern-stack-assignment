import { Response } from "../services/AuthService"
import { COOKIE_KEYS, setCookie } from "./cookies"

export const persistLoggedInUser = (res: Response<any>) => {
  setCookie(COOKIE_KEYS.USER_ID, res.data?._id)
  setCookie(COOKIE_KEYS.EMAIL, res.data?.email)
  setCookie(COOKIE_KEYS.USER_NAME, res.data?.name)
  setCookie(COOKIE_KEYS.TOKEN, res?.token || "")
}