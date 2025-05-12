
import React, { createContext, useContext, useState, useEffect } from 'react';
import initialData from '../data/initialData';
import { loadData, saveData } from '../utils/storage';

type Translations = {
  [language: string]: {
    [keyword: string]: string;
  };
};

type AppData = {
  order: string[];
  translations: Translations;
};

type TranslationContextType = {
  data: AppData;
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
  editTranslation: (keyword: string, lang: string, newValue: string) => void;
  addKeyword: (keyword: string, lang: string, value: string) => void;
  reorderKeywords: (newOrder: string[]) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<AppData>(() => loadData() || initialData);
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  useEffect(() => {
    saveData(data);
  }, [data]);

  const editTranslation = (keyword: string, lang: string, newValue: string) => {
    setData(prev => ({
      ...prev,
      translations: {
        ...prev.translations,
        [lang]: {
          ...prev.translations[lang],
          [keyword]: newValue,
        },
      },
    }));
  };

  const addKeyword = (keyword: string, lang: string, value: string) => {
    setData(prev => {
      const updatedTranslations: Translations = {};

      for (const language of Object.keys(prev.translations)) {
        updatedTranslations[language] = {
          ...prev.translations[language],
          [keyword]: language === lang ? value : '',
        };
      }

      return {
        order: [...prev.order, keyword],
        translations: updatedTranslations,
      };
    });
  };

  const reorderKeywords = (newOrder: string[]) => {
    setData(prev => ({
      ...prev,
      order: newOrder,
    }));
  };

  return (
    <TranslationContext.Provider
      value={{ data, currentLanguage, setCurrentLanguage, editTranslation, addKeyword, reorderKeywords }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
