import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { type ReactElement } from 'react';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps): ReactElement => {
    const { t, i18n } = useTranslation();

    const toggleLang = (): void => {
        void i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en');
    };

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={toggleLang}
                className={cls.LangSwitcherBtn}
            >
                {t('Page Language')}
            </Button>
        </div>
    );
};
