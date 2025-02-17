import { baseApi } from "../../baseApi"


export const ProductApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllproduct: builder.query({
            query:()=>({
                url:`cars/getAll`,
                method:"GET"
            })
        }), 
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `cars/${id}`,
                method: "GET",
            }),
        }),
    })
})

export const {useGetAllproductQuery, useGetSingleProductQuery}=ProductApi