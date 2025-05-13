import { useState } from "react";
import { useTranslation } from "../context/TranslationContext";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

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
      <Input
        type="text"
        placeholder="New keyword"
        value={keyword}
        className="text-green-400"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
      />
      <Input
        type="text"
        placeholder={`Translation in ${currentLanguage.toUpperCase()}`}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
      <Button onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
};

export default AddKeywordForm;
