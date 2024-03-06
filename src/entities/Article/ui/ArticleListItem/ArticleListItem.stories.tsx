import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleListItem } from './ArticleListItem';
import { type Article, ArticleView } from '../../model/types/Article';

const meta: Meta = {
    component: ArticleListItem,
    title: 'entities/Article/ArticleListItem',
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
};

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
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
            ]
        }
    ]
};

const testArticle = fakeArticle as Article;

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const PrimaryLightSmall: Story = {
    args: {
        view: ArticleView.SMALL,
        article: testArticle
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryDarkSmall: Story = {
    args: {
        view: ArticleView.SMALL,
        article: testArticle
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryVioletSmall: Story = {
    args: {
        view: ArticleView.SMALL,
        article: testArticle
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};

export const PrimaryLight: Story = {
    args: {
        view: ArticleView.BIG,
        article: testArticle
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryDark: Story = {
    args: {
        view: ArticleView.BIG,
        article: testArticle
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const PrimaryViolet: Story = {
    args: {
        view: ArticleView.BIG,
        article: testArticle
    },
    decorators: [ThemeDecorator(Theme.VIOLET)]
};
