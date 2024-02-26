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

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {
                comments?.length
                    ? (comments.map(comment => (
                        <CommentCard
                            key={comment.id}
                            isLoading={isLoading}
                            className={cls.comment}
                            comment={comment}
                        />
                    )))
                    : (
                        <Text text={t('No comments')}/>
                    )
            }
        </div>
    );
};

CommentList.displayName = 'CommentList';
