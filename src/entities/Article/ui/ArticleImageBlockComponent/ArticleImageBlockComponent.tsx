import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { memo, type ReactElement } from 'react';
import { type ArticleImageBlock } from '../../model/types/Article';

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
    alt?: string
}

export const ArticleImageBlockComponent = memo(({
    className,
    block,
    alt
}: ArticleImageBlockComponentProps): ReactElement => {
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={alt}/>
        </div>
    );
});

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';
