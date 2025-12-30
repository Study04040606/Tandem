import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* TODO добавить подчеркивание на кнопку при наведении */

export default function Button() {
    const { t } = useTranslation();    
     
    return (
        <Link to="/participate" className="btn btn-primary">
            {t('button-participate')}
        </Link>
    );
}

