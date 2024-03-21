import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Article, ArticleView } from 'entities/Article';
import { type ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { type StateSchema } from 'app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
);

// Here I use data normalisation
export const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true
    }),
    reducers: {
        initState: (state: ArticlesPageSchema) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
        },
        setView: (state: ArticlesPageSchema, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state: ArticlesPageSchema, action: PayloadAction<number>) => {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state: ArticlesPageSchema) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticlesList.fulfilled, (
                state: ArticlesPageSchema, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticlesList.rejected, (
                state: ArticlesPageSchema, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions
} = articlesPageSlice;
