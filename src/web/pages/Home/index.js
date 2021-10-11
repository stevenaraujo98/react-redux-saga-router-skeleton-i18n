import { useTranslation } from 'react-i18next';

export default () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>Home</h1>
            <p>{t('profile')}</p>
        </div>
    );
};
