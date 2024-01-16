import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";

type UnknownError = Error | AxiosError | unknown;

interface ApiResponse<T> {
  status: "ok" | "error";
  error: T | null;
  data: AxiosResponse | null;
}

class Fetch {
  static async get(
    url: string,
    headers?: Record<string, string>
  ): Promise<ApiResponse<UnknownError>> {
    const result: ApiResponse<UnknownError> = {
      status: "ok",
      error: null,
      data: null,
    };

    try {
      const config: AxiosRequestConfig = {
        method: "GET",
        url,
        headers,
      };

      const response: AxiosResponse = await axios(config);
      result.data = response.data;
    } catch (error: UnknownError) {
      result.status = "error";
      result.error = error;
      Fetch.handleRequestError(error);
    }

    return result;
  }

  private static handleRequestError(error: UnknownError): void {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(`Request failed with status ${error.response.status}`);
        console.error(error.response.data);
      } else if (error.request) {
        console.error("No response received");
      } else {
        console.error("Error setting up the request", error.message);
      }
    } else {
      console.error("Unexpected error occurred");
    }
  }
}

export default Fetch;
