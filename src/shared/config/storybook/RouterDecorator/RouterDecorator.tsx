import 'app/styles/index.scss';
import { type ReactElement } from 'react';
import { type StoryContext } from '@storybook/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

export function RouterDecorator (StoryComponent: any, { parameters: { router } }: StoryContext): ReactElement {
    if (!router) {
        return (
            <BrowserRouter>
                <StoryComponent/>
            </BrowserRouter>
        );
    }
    const {
        path,
        route
    } = router;
    const r = encodeURI(route);
    return (
        <MemoryRouter initialEntries={[r]}>
            <Routes>
                <Route path={path} element={<StoryComponent/>}/>
            </Routes>
        </MemoryRouter>
    );
}
