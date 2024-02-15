import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, type ReactElement } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
    className?: string
}
// TODO fix stories for this component
const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps): ReactElement => {
    const { t } = useTranslation();
    const { id } = useParams();

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                <h1>{t('Article was not found')}</h1>
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleDetails id={id}/>
        </div>
    );
};

ArticleDetailsPage.displayName = 'ArticleDetailsPage';

export default memo(ArticleDetailsPage);
