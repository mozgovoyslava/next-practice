import { Counter } from '@/features/counter';
import { Button } from '@/shared/ui';
import { PostsList } from '@/widgets/postsList';

export default function Home() {
    return (
        <main>
            <h1 data-testid="header">asdasd</h1>

            <Button>Кнопка</Button>
            <Counter />
            <PostsList />
        </main>
    );
}
