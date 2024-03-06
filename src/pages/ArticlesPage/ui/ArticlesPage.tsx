import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, type ReactElement } from 'react';
import { type Article, ArticleList, ArticleView } from 'entities/Article';

interface ArticlesPageProps {
    className?: string
}

const fakeArticle = {
    id: '1',
    title: 'Javascript news',
    user: {
        id: '1',
        username: 'Alex',
        avatar: 'https://t3.ftcdn.net/jpg/03/02/88/46/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg'
    },
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [
        'IT'
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. '
            ]
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\'hello\'></p>\n\n    <script>\n    ' +
                '  document.getElementById(\'hello\').innerHTML = \'Hello, world!\';\n   ' +
                ' </script>\n  </body>\n</html>;'
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. ' +
                'Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами' +
                ' некоего языка.'
            ]
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта'
        },
        {
            id: '3',
            type: 'CODE',
            code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router' +
                ' = jsonServer.router(path.resolve(__dirname, ' +
                '\'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);'
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. ' +
                'В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если'
            ]
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта'
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах.' +
                ' В нашем случае речь идёт о браузерах и о серверной платформе Node.js. '
            ]
        }
    ]
};

const article = fakeArticle as Article;

const ArticlesPage = ({ className }: ArticlesPageProps): ReactElement => {
    const { t } = useTranslation('articlesPage');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <h1>{t('Articles page')}</h1>
            <ArticleList
                view={ArticleView.SMALL}
                isLoading={false}
                articles={
                    new Array(16)
                        .fill(0)
                        .map((_item, i) => ({
                            ...article,
                            id: String(i)
                        }))
                }
            />
        </div>
    );
};

ArticlesPage.displayName = 'ArticlesPage';

export default memo(ArticlesPage);
