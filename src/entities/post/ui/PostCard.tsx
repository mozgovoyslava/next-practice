import type { Post } from '../model/types';
import css from './PostCard.module.scss';

interface PostCardProps {
    post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
    return (
        <article className={css.root}>
            <h3 className={css.title}>{post.title}</h3>
            <p className={css.body}>{post.body}</p>
            <div className={css.meta}>Author: {post.userId}</div>
        </article>
    );
};
