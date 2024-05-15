import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey, baseAuthUrl } from "../databases/users";

export const authApi = createApi ({
    reducerPath: 'authApi', //unique name for the Api
    baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({...auth}) => ({
                url: `/accounts:signUp?key=${apiKey}`, //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}
                method: 'POST',
                body: auth,
            }),
        }),
        //Login
        signIn: builder.mutation({
            query: ({...auth}) => ({
                url: `/accounts:signInWithPassword?key=${apiKey}`,
                method: 'POST',
                body: auth
            })
        })
    })
})

export const { useSignInMutation, useSignUpMutation } = authApi