import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { type ReactElement } from 'react';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { type Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { type Currency, CurrencySelect } from 'entities/Currency';
import { type Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeFirstName?: (value: string) => void
    onChangeLastName?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeUserName?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUserName,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
}: ProfileCardProps): ReactElement => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader/>
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={'Some error happen: see details above:'}
                    text={error}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                <div className={classNames(cls.avatarWrapper, {}, [className])}>
                    {data?.avatar && <Avatar src={data?.avatar} alt={`${data?.firstname} ${data?.lastname} }`}/>}
                </div>
                <Input
                    value={data?.firstname}
                    placeholder={t('Your name')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstName}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastName}
                />
                <Input
                    value={data?.age}
                    type="number"
                    placeholder={t('Enter age')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                    className={cls.input}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                    className={cls.input}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Enter city')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Enter username')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeUserName}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Enter the avatar link')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
            </div>
        </div>
    );
};
