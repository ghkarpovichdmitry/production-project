import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

interface ComponentProps {
    className?: string;
}

export const Component = ({className}: ComponentProps) => {
    const {t} = useTranslation();

    return (
        <div className="">
            <h1>{t('Welcome to React')}</h1>
            <h2>{t('Test translation')}</h2>
        </div>
    );
};
