import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { type ReactElement, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
    className?: string
}

const initialReducers: ReducersList = {
    profile: profileReducer
};

const ProfilePage = memo(({ className }: ProfilePageProps): ReactElement => {
    const { t } = useTranslation('profilePage');

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <h1>{t('Profile Page')}</h1>
            </div>
        </DynamicModuleLoader>
    );
});

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;
