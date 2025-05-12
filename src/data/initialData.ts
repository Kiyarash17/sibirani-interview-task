type Translations = {
  [languageCode: string]: {
    [keyword: string]: string;
  };
};

export type AppData = {
  order: string[];
  translations: Translations;
};

const initialData: AppData = {
  order: ["hello", "bye"],
  translations: {
    en: { hello: "Hello", bye: "Goodbye" },
    fr: { hello: "Bonjour", bye: "Au revoir" },
    de: { hello: "Hallo", bye: "Tschüss" },
  },
};

export default initialData;
