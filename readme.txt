# Storybook examples
https://stackblitz.com/github/storybookjs/sandboxes/tree/next/react-webpack/17-ts/after-storybook?file=src%2Fstories%2FButton.stories.ts,src%2Fstories%2FPage.stories.ts&preset=node

# For example User is Entity slice, model in User folder is model Segments, ui folder in User folder is ui Segments, index.ts file in User is public API Segment

# In order to have an async component (additional to default one) you need to export default component through 'export default' way.


// const renderBlock = useCallback((block: ArticleBlock) => {
//     const componentMap: { [key in ArticleBlockType]: JSX.Element } = { // TODO
//         TEXT: <ArticleTextBlockComponent block={block}/>,
//         IMAGE: <ArticleImageBlockComponent block={block}/>,
//         CODE: <ArticleCodeBlockComponent block={block}/>
//     };
//
//     return componentMap[block.type] || null;
// }, []);
