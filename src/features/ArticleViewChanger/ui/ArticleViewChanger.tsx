import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewChanger.module.scss';
import { type ReactElement, memo } from 'react';
import { ArticleView } from 'entities/Article';
import ListIcon from 'shared/assets/icons/bi_list.svg';
import CardsIcon from 'shared/assets/icons/fe_tiled.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

interface ArticleViewChangerProps {
    className?: string
    view?: ArticleView
    onViewClick?: (view: ArticleView) => void
}

export const ArticleViewChanger = memo(({
    className,
    view,
    onViewClick
}: ArticleViewChangerProps): ReactElement => {
    const viewTypes = [
        {
            view: ArticleView.BIG,
            icon: ListIcon
        },
        {
            view: ArticleView.SMALL,
            icon: CardsIcon
        }
    ];

    const onClick = (newView: any) => () => onViewClick?.(newView);

    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map(viewType => {
                return (<Button
                    theme={ButtonTheme.CLEAR}
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.active]: view === viewType.view }, [className])}
                    />
                </Button>);
            })}
        </div>
    );
});

ArticleViewChanger.displayName = 'ArticleViewChanger';
