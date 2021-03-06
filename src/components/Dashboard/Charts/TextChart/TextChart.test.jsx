import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TextChart from './TextChart';

test('renders with the correct text and unmount correctly', () => {
    render(
        <Provider store={configureStore()({
            dashboard: {
                adherents: null,
            },
        })}
        >
            <TextChart />
        </Provider>,
    );
});
