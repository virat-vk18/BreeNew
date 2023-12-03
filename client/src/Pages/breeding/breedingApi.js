import { api } from "../../app/service/api";

const breedingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStudDogs: builder.query({
      query: (id) => ({
        url: "/studfarm",
        params: id,
      }),
      provideTags: ["Todos"],
    }),
    getAllDogs: builder.query({
      query: () => ({
        url: "/studfarm/alldogs",
      }),
      provideTags: ["Todos"],
    }),
    // nftCreate: builder.mutation({
    //   query: (createNft) => ({
    //     url: "createnft",
    //     method: "POST",
    //     body: createNft,
    //   }),
    //   invalidatesTags: ["Todos"],
    // }),
    // sellCreate: builder.mutation({
    //   query: (formData) => ({
    //     url: "createnft/sellcreation",
    //     method: "POST",
    //     body: formData,
    //   }),
    //   invalidatesTags: ["Todos"],
    // }),
    // studCreate: builder.mutation({
    //   query: (stud) => ({
    //     url: "createnft/studcreation",
    //     method: "POST",
    //     body: stud,
    //   }),
    //   invalidatesTags: ["Todos"],
    // }),

    // jwtAddress: builder.mutation({
    //   query: (body) => ({
    //     url: "connectJwt/wallet",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Todos"],
    // }),
    // loginUser: builder.mutation({
    //   query: (todo) => ({
    //     url: "/login",
    //     method: "POST",
    //     body: todo,
    //   }),
    //   invalidatesTags: ["Todos"],
    // }),

    // deleteUser: builder.mutation({
    //   query: (body) => ({
    //     url: "/register/deleteuser",
    //     method: "DELETE",
    //     body,
    //   }),
    //   invalidatesTags: ["Todos"],
    // }),
    // updateUser: builder.mutation({
    //   query: (body) => ({
    //     url: `register/edituser/`,
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Todos"],
    // }),
    // submitUpdate: builder.mutation({
    //   query: ({ id, ...body }) => ({
    //     url: `register/${id}`,
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Todos"],
    // }),
  }),
});

export const { useGetStudDogsQuery, useGetAllDogsQuery } = breedingApi;
