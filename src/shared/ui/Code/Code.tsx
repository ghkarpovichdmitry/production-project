import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { type ReactElement } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';

interface CodeProps {
    className?: string
    text: string
}

export const Code = ({ className, text }: CodeProps): ReactElement => {
    const onCopy = (): void => {
        /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
        navigator.clipboard.writeText(text);
    };

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                onClick={onCopy}
                theme={ButtonTheme.CLEAR}
            >
                <CopyIcon className={cls.icon}/>
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
