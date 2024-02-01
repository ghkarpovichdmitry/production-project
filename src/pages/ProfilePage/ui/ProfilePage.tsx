import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { type ReactElement, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, profileReducer, ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageProps {
    className?: string
}

const initialReducers: ReducersList = {
    profile: profileReducer
};

const ProfilePage = memo(({ className }: ProfilePageProps): ReactElement => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <h1>{t('Profile Page')}</h1>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    );
});

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;
