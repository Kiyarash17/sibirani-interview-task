import React from "react";
import { useTranslation } from "../context/TranslationContext";

const KeywordTable = () => {
  const { data, editTranslation } = useTranslation();
  const languages = Object.keys(data.translations);

  return (
    <table className="w-full table-auto border border-collapse border-gray-300">
      <thead>
        <tr>
          <th className="border p-2 bg-gray-100">Keyword</th>
          {languages.map((lang) => (
            <th key={lang} className="border p-2 bg-gray-100">
              {lang.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.order.map((keyword) => (
          <tr key={keyword}>
            <td className="border p-2 font-semibold">{keyword}</td>
            {languages.map((lang) => (
              <td key={lang} className="border p-1">
                <input
                  type="text"
                  className="w-full p-1 border"
                  value={data.translations[lang][keyword] || ""}
                  onChange={(e) =>
                    editTranslation(keyword, lang, e.target.value)
                  }
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default KeywordTable;
