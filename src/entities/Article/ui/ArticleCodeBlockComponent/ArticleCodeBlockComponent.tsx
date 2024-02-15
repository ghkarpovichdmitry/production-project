import { classNames } from 'shared/lib/classNames/classNames';
import { memo, type ReactElement } from 'react';
import { type ArticleCodeBlock } from '../../model/types/Article';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({
    className,
    block
}: ArticleCodeBlockComponentProps): ReactElement => {
    return (
        <div className={classNames('', {}, [className])}>
            <Code text={block.code}/>
        </div>
    );
});

ArticleCodeBlockComponent.displayName = 'ArticleCodeBlockComponent';
