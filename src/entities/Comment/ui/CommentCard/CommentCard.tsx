import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { type ReactElement } from 'react';
import { type Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routerConfig';

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = ({
    className,
    comment,
    isLoading
}: CommentCardProps): ReactElement => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%"/>
                    <Skeleton width={100} height={16} className={cls.username}/>
                </div>
                <Skeleton width={'100%'} height={50} className={cls.text}/>
            </div>
        );
    }

    if (comment && !comment?.user) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <Text className={cls.username} text={'User was not found'}/>
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink className={cls.header} to={`${RoutePath.profile}${comment?.user.id}`}>
                <Avatar size={30} src={comment?.user.avatar}/>
                <Text className={cls.username} title={comment?.user.username}/>
            </AppLink>
            <Text className={cls.text} text={comment?.text}/>
        </div>
    );
};

CommentCard.displayName = 'CommentCard';
