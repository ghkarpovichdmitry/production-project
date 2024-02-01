import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { type ReactElement } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps): ReactElement => {
    const { t } = useTranslation('profile');
    const profileData = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className || ''])}>
            <div className={cls.header}>
                <Text title={t('Profile')}/>
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('Edit')}
                </Button>
            </div>
            {isLoading && <span>{'Loading...'}</span>}
            {error && <Text title={`${error}`}/>}
            <div className={cls.data}>
                <Input
                    value={profileData?.firstname}
                    placeholder={t('Your name')}
                    className={cls.input}
                />
                <Input
                    value={profileData?.lastname}
                    placeholder={t('Your lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
