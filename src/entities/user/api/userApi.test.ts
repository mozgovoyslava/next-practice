import type { User } from '../model/types';
import { userApi } from './userApi';
import { makeStore } from '@/shared/lib/store';

describe('userApi', () => {
    const originalFetch = global.fetch;

    afterEach(() => {
        global.fetch = originalFetch;
    });

    it('fetches users and stores result', async () => {
        const users: User[] = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'leanne@example.com',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496',
                    },
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets',
                },
            },
        ];

        global.fetch = jest.fn().mockResolvedValue(
            new Response(JSON.stringify(users), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }),
        ) as typeof fetch;

        const store = makeStore();
        const result = await store.dispatch(userApi.endpoints.getUsers.initiate());

        expect(result.data).toEqual(users);
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});
