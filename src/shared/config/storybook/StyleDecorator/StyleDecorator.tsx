import 'app/styles/index.scss';
import { type StoryFn } from '@storybook/react';
import { type ReactElement } from 'react';

export const StyleDecorator = (StoryComponent: StoryFn): ReactElement => {
    return (
        <div className="app">
            <StoryComponent/>
        </div>
    );
};
