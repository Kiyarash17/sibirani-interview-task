import React from "react";
import { useTranslation } from "../context/TranslationContext";
import KeywordTable from "../components/KeywordTable";
import AddKeywordForm from "../components/AddKeywordForm";

const Dashboard = () => {
  const { currentLanguage, setCurrentLanguage } = useTranslation();

  const languages = ["en", "fr", "de"];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Translation Dashboard</h1>

      <label className="block mb-2">
        Language:
        <select
          className="ml-2 border p-1"
          value={currentLanguage}
          onChange={(e) => setCurrentLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
      </label>

      <AddKeywordForm />
      <KeywordTable />
    </div>
  );
};

export default Dashboard;
