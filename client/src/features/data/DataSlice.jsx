import { createApi } from "@reduxjs/toolkit/query/react";
import axiosInstance from "../../app/AxiosInstance"; // Adjust the import path accordingly

// Custom baseQuery using Axios
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };

// Create the API slice
const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "https://dummyjson.com" }), // Set your base URL here
  endpoints: (builder) => ({
    getSomeData: builder.query({
      query: () => ({ url: "/products", method: "GET" }),
    }),
    // Add other endpoints here
  }),
});

export const { useGetSomeDataQuery } = api;
export default api;
