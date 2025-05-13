import { useTranslation } from "../context/TranslationContext";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";

const PublicView: React.FC = () => {
  const { data, currentLanguage, setCurrentLanguage } = useTranslation();
  const languages = Object.keys(data.translations);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>View</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Public View</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Language:</span>
            <Select value={currentLanguage} onValueChange={setCurrentLanguage}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
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
