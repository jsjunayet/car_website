import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { logout, setuser } from "./features/auth/authSlice";
import { RootState } from "./store";
const baseQuery = fetchBaseQuery({
  baseUrl: "https://blogging-website-snowy-chi.vercel.app/api",
  // baseUrl: "http://localhost:5000/api",

  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const token = (state.auth as any).token;
    console.log(token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryRefreshToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (arg, api, extraOptions) => {
  let result = await baseQuery(arg, api, extraOptions);
  console.log(result, "result");
  if (result.error?.status === 401 || result.error?.status === 404) {
    const refreshResponse = await fetch(
      "https://blogging-website-snowy-chi.vercel.app/api/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );
    if (refreshResponse.ok) {
      const accessToken = await refreshResponse.json();
      api.dispatch(
        setuser({
          token: accessToken.data,
          user: (api.getState() as RootState).auth.user,
        })
      );
      result = await baseQuery(arg, api, extraOptions);
    } else {
      await refreshResponse.json();
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["Products", "Orders", "Auth"],
});
