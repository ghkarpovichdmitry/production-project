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

