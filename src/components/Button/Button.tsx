import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* TODO добавить подчеркивание на кнопку при наведении */

export default function Button() {
    const { t } = useTranslation();    
     
    return (
        <div className='text-center mt-4'>
            <Link to="/participate" className="btn btn-primary px-16 transition duration-300 ease-in-out hover:scale-105 ">
                {t('button-participate')}
            </Link>
        </div>
        
    );
}

