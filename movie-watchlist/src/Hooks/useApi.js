import { useState } from "react";
import { env } from "../utils/env";

const baseUrl = `${env.apiUrl}`;
export default function useApi() {
  console.log(env.apiUrl);
  const [loading, setLoading] = useState(false);

  const apiFn = async ({ url }) => {
    try {
      setLoading(true);
      const response = await fetch(baseUrl + url);
      console.log(response);
      if (!response) {
        const errorData = await response.json();
        const errorMessage = errorData?.message;
        setLoading(false);
        return {
          response: null,
          error: errorMessage ? errorMessage : "Error Occurred",
        };
      }
      setLoading(false);

      const result = await response.json();

      return { response: result, error: null };
    } catch (error) {
      setLoading(false);
      return {
        response: null,
        error: error?.message ? error?.message : "Error Occurred",
      };
    }
  };
  return [apiFn, loading];
}
