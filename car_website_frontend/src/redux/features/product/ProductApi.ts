import { baseApi } from "../../baseApi";

export const ProductApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // ✅ Get all products
        getAllProduct: builder.query({
            query: () => ({
                url: `cars/getAll`,
                method: "GET",
            }),
            providesTags: ['Products'],
        }),

        // ✅ Get single product
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `cars/${id}`,
                method: "GET",
            }),
            providesTags: ['Products'],
        }),

        // ✅ Create a new product
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: "cars/create",
                method: "POST",
                body: newProduct,
            }),
        }),

        // ✅ Update a product
        updateProduct: builder.mutation({
            query: ({ id, updatedData }) => ({
                url: `cars/${id}`,
                method: "PUT",
                body: updatedData,
            }),
            invalidatesTags: ['Products'],
        }),

        // ✅ Delete a product
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `cars/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Products'],
        }),
    }),
});

// ✅ Export hooks
export const {
    useGetAllProductQuery,
    useGetSingleProductQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = ProductApi;
