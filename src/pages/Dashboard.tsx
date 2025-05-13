import { useTranslation } from "../context/TranslationContext";
import AddKeywordForm from "../components/AddKeywordForm";
import DraggableKeywordList from "../components/DraggableKeywordList";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";

const Dashboard = () => {
  const { currentLanguage, setCurrentLanguage } = useTranslation();
  const languages = ["en", "fr", "de"];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

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

      <DraggableKeywordList />
    </div>
  );
};

export default Dashboard;
