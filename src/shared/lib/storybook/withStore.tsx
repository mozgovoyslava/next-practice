import type { Decorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { makeStore } from '@/shared/lib/store';
import type { PreloadedState } from '@/shared/lib/store';

export const withStore = (initialState?: PreloadedState): Decorator => {
    const StoreDecorator: Decorator = (Story) => {
        const store = makeStore(initialState);
        return (
            <Provider store={store}>
                <Story />
            </Provider>
        );
    };
    return StoreDecorator;
};
