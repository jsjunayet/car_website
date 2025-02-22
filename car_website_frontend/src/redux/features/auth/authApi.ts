import { baseApi } from "../../baseApi"


export const authApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        login: builder.mutation({
            query:(payload)=>({
                url:`auth/login`,
                method:"POST",
                body:payload
            }),
        invalidatesTags: ['Auth'],
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
        getsigleuser: builder.query({
            query:()=>({
                url:`auth/sigleuser`,
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
        UpateUser: builder.mutation({
            query: (body) => ({
                url: `auth/upateuser`,
                method: "PUT",
                body:body
            }),
            invalidatesTags: ['Auth'],
        }),
       ChangePassword: builder.mutation({
            query: (body) => ({
                url: `auth/changePassword`,
                method: "PUT",
                body:body
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

export const {useLoginMutation, useRegisterMutation, useGetAllUserQuery,useDeleteUserMutation, useUpdateRoleUserMutation, useChangePasswordMutation, useUpateUserMutation, useGetsigleuserQuery}=authApi