import { baseApi } from "../../baseApi";

export const OderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    OrderCreate: builder.mutation({
      query: (payload) => ({
        url: `orders/create`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Orders"],
    }),
    getVerifyOrder: builder.query({
      query: (order_id) => ({
        url: `orders/verify`,
        params: { order_id },
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    getAllOrder: builder.query({
      query: () => ({
        url: `orders/allOrder`,
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    allOrderAndStatus: builder.query({
      query: () => ({
        url: `orders/allOrderAndStatus`,
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),

    getSingleOrder: builder.query({
      query: () => ({
        url: `/orders/getsingle`,
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetVerifyOrderQuery,
  useOrderCreateMutation,
  useGetAllOrderQuery,
  useDeleteOrderMutation,
  useGetSingleOrderQuery,
  useAllOrderAndStatusQuery,
} = OderApi;
