import { baseApi } from "../../baseApi"


export const OderApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        OrderCreate: builder.mutation({
            query:(payload)=>({
                url:`orders/create`,
                method:"POST",
                body:payload
            })
        }),  
        getVerifyOrder: builder.query({
            query:(order_id)=>({
                url:`orders/verify`,
                params: { order_id },
                method:"GET"
            })
        }),
        getAllOrder: builder.query({
            query:()=>({
                url:`orders/allOrder`,
                method:"GET"
            })
        })
    })
})

export const {useGetVerifyOrderQuery, useOrderCreateMutation, useGetAllOrderQuery}=OderApi