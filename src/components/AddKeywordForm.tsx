import React, { useState } from "react";
import { useTranslation } from "../context/TranslationContext";

const AddKeywordForm = () => {
  const [keyword, setKeyword] = useState("");
  const [value, setValue] = useState("");
  const { addKeyword, currentLanguage } = useTranslation();

  const handleAdd = () => {
    if (!keyword.trim()) return;
    addKeyword(keyword.trim(), currentLanguage, value.trim());
    setKeyword("");
    setValue("");
  };

  return (
    <div className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="New keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border p-1"
      />
      <input
        type="text"
        placeholder={`Translation in ${currentLanguage.toUpperCase()}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-1"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default AddKeywordForm;
