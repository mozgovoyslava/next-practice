import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { makeStore } from '@/shared/lib/store';
import { PostDetails } from '@/widgets/postDetails';
import { CommentsList } from '@/widgets/commentsList';
import css from './page.module.scss';

interface PostPageStoryProps {
    postId: number;
}

const PostPageStory = ({ postId }: PostPageStoryProps) => {
    return (
        <main className={css.root}>
            <PostDetails postId={postId} />
            <h2 className={css.heading}>Комментарии</h2>
            <CommentsList postId={postId} />
        </main>
    );
};

const meta = {
    title: 'pages/PostPage',
    component: PostPageStory,
    decorators: [
        (Story) => {
            const store = makeStore();
            return (
                <Provider store={store}>
                    <Story />
                </Provider>
            );
        },
    ],
    tags: ['autodocs'],
    args: {
        postId: 1,
    },
} satisfies Meta<typeof PostPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
