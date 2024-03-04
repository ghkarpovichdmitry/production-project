import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, type ReactElement, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { Text } from 'shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface AddCommentFormProps {
    className?: string
    onSendComment: (value: string) => void
    isLoading: boolean
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
};

const AddCommentForm = memo(({
    className,
    onSendComment,
    isLoading
}: AddCommentFormProps): ReactElement => {
    const { t } = useTranslation('articleDetails');
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Add comment text')}
                    value={text}
                    onChange={onCommentTextChange}
                    className={cls.input}
                    disabled={isLoading}
                />
                {error ?? <Text text={error}/>}
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                    disabled={isLoading}>
                    {t('Send')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

AddCommentForm.displayName = 'AddCommentForm';
export default AddCommentForm;
