import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, type ReactElement, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps): ReactElement => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
        dispatch(profileActions.setReadOnly(true));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')}/>
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readonly
                        ? <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                            {t('Edit')}
                        </Button>
                        : <>
                            <Button theme={ButtonTheme.OUTLINE_RED} className={cls.editBtn} onClick={onCancelEdit}>
                                {t('Cancel')}
                            </Button>
                            <Button theme={ButtonTheme.OUTLINE} className={cls.saveBtn} onClick={onSave}>
                                {t('Save')}
                            </Button>
                        </>
                    }
                </div>
            )}
        </div>
    );
});

ProfilePageHeader.displayName = 'ProfilePageHeader';
