import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, type ReactElement } from 'react';

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = memo(({
    className,
    short = false
}: LangSwitcherProps): ReactElement => {
    const {
        t,
        i18n
    } = useTranslation();

    const toggleLang = (): void => {
        void i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en');
    };

    return (
        <div className={classNames('', {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggleLang}
                className={cls.LangSwitcherBtn}
            >
                {t(short ? 'Page Language Short' : 'Page Language')}
            </Button>
        </div>
    );
});

LangSwitcher.displayName = 'LangSwitcher';
