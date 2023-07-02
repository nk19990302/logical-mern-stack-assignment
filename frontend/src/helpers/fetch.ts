import { Response } from "../services/AuthService";

const request = async <TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<Response<TResponse>> => {
  try {
    const response = await fetch(url, config);
    const data = await response.json();
    return data as Response<TResponse>;
  } catch (error: any) {
    return { status: "error", statusCode: 404, message: error.message }
  }
}

export default request;

