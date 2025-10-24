// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/recipes' }),
  endpoints: (builder) => ({
    getAllRecipes: builder.query({
      query: () => `/`,
    }),
  }),
})

export const { useGetAllRecipesQuery } = recipesApi