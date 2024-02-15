import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { memo, type ReactElement } from 'react';
import { type ArticleTextBlock } from '../../model/types/Article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({
    className,
    block
}: ArticleTextBlockComponentProps): ReactElement => {
    return (
        <div className={classNames('', {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title}/>
            )}
            {block.paragraphs?.map((paragraph: any) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph}/>
            ))}
        </div>
    );
});

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';
