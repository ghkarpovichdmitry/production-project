import 'app/styles/index.scss';
import { type StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { type ReactElement } from 'react';

export const RouterDecorator = (StoryComponent: StoryFn): ReactElement => {
    return (
        <BrowserRouter>
            <StoryComponent/>
        </BrowserRouter>
    );
};
