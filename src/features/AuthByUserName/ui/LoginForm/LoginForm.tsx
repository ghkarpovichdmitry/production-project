import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { type ReactElement } from 'react';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps): ReactElement => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder={t('Enter username')}
                className={cls.input}
                autofocus={true}
            />
            <Input
                placeholder={t('Enter password')}
                className={cls.input}
            />
            <Button className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
};
