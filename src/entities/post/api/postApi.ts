import { baseApi } from '@/shared/api';
import type { Post } from '../model/types';

export interface GetPostsParams {
    page?: number;
    limit?: number;
}

export const postApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPosts: build.query<Post[], GetPostsParams | void>({
            query: (params) => ({
                url: '/posts',
                params: {
                    _page: params?.page ?? 1,
                    _limit: params?.limit ?? 10,
                },
            }),
            serializeQueryArgs: ({ endpointName }) => endpointName,
            merge: (currentCache, newItems) => {
                const existingIds = new Set(currentCache.map((post) => post.id));
                newItems.forEach((post) => {
                    if (!existingIds.has(post.id)) {
                        currentCache.push(post);
                    }
                });
            },
            forceRefetch: ({ currentArg, previousArg }) =>
                currentArg?.page !== previousArg?.page || currentArg?.limit !== previousArg?.limit,
            providesTags: (result) =>
                result
                    ? [{ type: 'Post', id: 'LIST' }, ...result.map((post) => ({ type: 'Post' as const, id: post.id }))]
                    : [{ type: 'Post', id: 'LIST' }],
        }),
        getPostById: build.query<Post, number>({
            query: (id) => `/posts/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Post', id }],
        }),
    }),
    overrideExisting: false,
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi;
