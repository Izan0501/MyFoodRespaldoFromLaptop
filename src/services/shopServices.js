import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDatabase";


export const shopApi = createApi({
    
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
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
            query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`
        })
    }),

})

export const { useGetProductsByIdQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery } = shopApi