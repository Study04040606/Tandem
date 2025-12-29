import { useTranslation } from 'react-i18next';
import { languages } from '@/languages';

const LanguageSelect = () => {
    const { i18n } = useTranslation(); 

    return (
        <select 
            value={i18n.resolvedLanguage} 
            onChange={(e) => i18n.changeLanguage(e.target.value)} 
            className="select select-ghost bg-neutral-100 text-neutral-900 border-0" 
            aria-label="Select language"
            title="Select language"
        >
            {Object.keys(languages).map((language) => (
                <option value={language} key={language} disabled={i18n.resolvedLanguage === language}>
                    {languages[language].nativeName}
                </option>
                ))  
            }
        </select> 
    )
}

export default LanguageSelect;