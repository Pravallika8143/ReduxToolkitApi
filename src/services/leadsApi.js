import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const leadsApi = createApi({
  reducerPath: 'leadsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500/api/leads' }),
  endpoints: (builder) => ({
    getAllLeads: builder.query({
      query: () => `/`,
    }),
    getLeadDetailsById:builder.query({
      query:(id) => `/${id}`
    }),
    addNewLead:builder.mutation({
      query: (lead) => ({
        url: `/`,
        method: 'POST',
        body: lead,
      }),
    }),
    deleteLead:builder.mutation({
      query:(id) => ({
        url:`/${id}`,
        method:"DELETE"
      }),
    }),
    updateLead:builder.mutation({
      query:(lead) => ({
        url:`/${lead['_id']}`,
        method:"PUT",
        body:lead,
      })
    })
  }),
});

export const { 
  useGetAllLeadsQuery,
  useLazyGetAllLeadsQuery,
  useAddNewLeadMutation,
  useDeleteLeadMutation ,
  useGetLeadDetailsByIdQuery,
  useLazyGetLeadDetailsByIdQuery,
  useUpdateLeadMutation,
} = leadsApi