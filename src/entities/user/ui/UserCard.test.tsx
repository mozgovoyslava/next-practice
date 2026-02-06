import { render, screen } from '@testing-library/react';
import type { User } from '../model/types';
import { UserCard } from './UserCard';

const user: User = {
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
};

describe('UserCard', () => {
    it('renders user details', () => {
        render(<UserCard user={user} />);

        expect(screen.getByText(user.name)).toBeInTheDocument();
        expect(screen.getByText(`@${user.username}`)).toBeInTheDocument();
        expect(screen.getByText(user.email)).toBeInTheDocument();
        expect(screen.getByText(user.phone)).toBeInTheDocument();
        expect(screen.getByText(user.website)).toBeInTheDocument();
        expect(screen.getByText(user.company.name)).toBeInTheDocument();
        expect(screen.getByText(`${user.address.city}, ${user.address.street}`)).toBeInTheDocument();
    });
});
