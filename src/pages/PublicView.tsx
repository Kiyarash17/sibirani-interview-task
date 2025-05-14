import { useTranslation } from "../context/TranslationContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Card, CardContent } from "../components/ui/card";

const PublicView: React.FC = () => {
  const { data, currentLanguage, setCurrentLanguage } = useTranslation();
  const languages = Object.keys(data.translations);

  return (
    <>
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

      <Card className="p-5 mt-5">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">Word Translations</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Select
                value={currentLanguage}
                onValueChange={setCurrentLanguage}
              >
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
          </div>
        </div>

        <div className="space-y-3">
          {data.order.map((keyword) => (
            <Card key={keyword}>
              <CardContent className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center">
                <span className="font-semibold">{keyword}</span>
                <span>
                  {data.translations[currentLanguage][keyword] || (
                    <span className="text-gray-400 italic">
                      — no translation —
                    </span>
                  )}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Card>
    </>
  );
};

export default PublicView;
