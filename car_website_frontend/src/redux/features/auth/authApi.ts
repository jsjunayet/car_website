import { baseApi } from "../../baseApi"


export const authApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        login: builder.mutation({
            query:(payload)=>({
                url:`auth/login`,
                method:"POST",
                body:payload
            })
        }),  
        Register: builder.mutation({
            query:(payload)=>({
                url:`auth/register`,
                method:"POST",
                body:payload
            })
        }),
        getAllUser: builder.query({
            query:()=>({
                url:`auth/alluser`,
                method:"GET"
            }),
            providesTags: ['Auth']
            
        }),
        UpdateRoleUser: builder.mutation({
            query: (id) => ({
                url: `auth/updateRole/${id}`,
                method: "PUT",
            }),
            invalidatesTags: ['Auth'],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `auth/deletedUser/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Auth'],
        }),
    })
})

export const {useLoginMutation, useRegisterMutation, useGetAllUserQuery,useDeleteUserMutation, useUpdateRoleUserMutation}=authApi