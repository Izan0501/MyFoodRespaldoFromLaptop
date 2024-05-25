import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDatabase";


export const shopApi = createApi({
    reducerPath: 'shopApi',   //Establish a unique name for the API
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    tagTypes: ['profileImageGet'],   //Declare tags
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categories.json`
        }),
        getProductsByCategory: builder.query({
            query: (categoryId) => `restaurants.json?orderBy="categoryId"&equalsTo="${categoryId}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                return responseTransformed
            }
        }),
        getProductsById: builder.query({
            query: (menu) => `restaurants.json?orderBy="menu"&equalsTo=${menu}`,
            transformResponse : (response) => {
                const responseTransformed = Object.values(response)
                if(responseTransformed.lenght) return responseTransformed[0]
                return null
            }
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ['profileImageGet']
        }),
        //We make a PUT request for not creating additional key, because de localId is already an unique key.
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image
                },
            }),
            invalidatesTags: ['profileImageGet'] //Invalidates will trigger a refetch on profileImageGet
        }),
    }),

})

export const { 
    useGetProductsByIdQuery,
    useGetCategoriesQuery,
    useGetProductsByCategoryQuery,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
} = shopApi