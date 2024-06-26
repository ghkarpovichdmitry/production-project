import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { useTranslation } from 'react-i18next';
import { type ReactElement } from 'react';
import { CommentCard } from '../CommentCard/CommentCard';
import { type Comment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = ({
    className,
    comments,
    isLoading
}: CommentListProps): ReactElement => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
            </div>
        );
    }

    if (!comments?.length) {
        return <Text text={t('No comments')}/>;
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {
                comments.map(comment => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
            }
        </div>
    );
};

CommentList.displayName = 'CommentList';
