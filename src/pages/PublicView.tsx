import { useTranslation } from "../context/TranslationContext";
import { Link } from "react-router-dom";

const PublicView: React.FC = () => {
  const { data, currentLanguage, setCurrentLanguage } = useTranslation();
  const languages = Object.keys(data.translations);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Public View</h1>
        <div className="flex items-center gap-4">
          <label>
            Language:
            <select
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              className="ml-2 border p-1"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
          <Link
            to="/dashboard"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Go to Dashboard
          </Link>
        </div>
      </header>

      <ul className="space-y-3">
        {data.order.map((keyword) => (
          <li
            key={keyword}
            className="p-4 border rounded-md bg-gray-50 flex justify-between items-center"
          >
            <span className="font-semibold">{keyword}</span>
            <span>
              {data.translations[currentLanguage][keyword] || (
                <span className="text-gray-400 italic">— no translation —</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicView;
