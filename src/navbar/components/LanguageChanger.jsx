import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageChanger = (props) => {
  const { i18n } = useTranslation();

  const languageChangeHandler = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ka');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <div
      className='flex bg-slate-200 cursor-pointer'
      onClick={languageChangeHandler}
    >
      <div
        className={`p-2 font-semibold ${
          i18n.language === 'en' && 'bg-amber-400'
        }`}
      >
        En
      </div>
      <div
        className={`p-2 font-semibold ${
          i18n.language === 'ka' && 'bg-amber-400'
        }`}
      >
        ქა
      </div>
    </div>
  );
};

export default LanguageChanger;
