'use client';

import { useEffect, useRef, useState } from 'react';
import { PostCard, useGetPostsQuery } from '@/entities/post';
import css from './PostsList.module.scss';

const PAGE_SIZE = 10;

export const PostsList = () => {
    const [page, setPage] = useState(1);
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    const { data, isLoading, isFetching, isError } = useGetPostsQuery({
        page,
        limit: PAGE_SIZE,
    });

    const posts = data ?? [];
    const hasMore = posts.length >= page * PAGE_SIZE;

    useEffect(() => {
        if (!hasMore) {
            return;
        }

        const node = sentinelRef.current;
        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (!first?.isIntersecting) {
                    return;
                }

                if (!isFetching && !isLoading && hasMore) {
                    setPage((prev) => prev + 1);
                }
            },
            { rootMargin: '200px' },
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [hasMore, isFetching, isLoading]);

    return (
        <section className={css.root} aria-label="Posts">
            <h2 className={css.title}>Posts</h2>

            {posts.length === 0 && isLoading ? <div className={css.state}>Loading posts...</div> : null}

            {isError ? <div className={css.state}>Failed to load posts.</div> : null}

            <div className={css.list}>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {isFetching && posts.length > 0 ? <div className={css.state}>Loading more...</div> : null}

            {hasMore ? (
                <div className={css.sentinel} ref={sentinelRef} />
            ) : (
                <div className={css.state}>No more posts.</div>
            )}
        </section>
    );
};
