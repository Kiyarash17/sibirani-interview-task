import { useTranslation } from "../context/TranslationContext";
import AddKeywordForm from "../components/AddKeywordForm";
import DraggableKeywordList from "../components/DraggableKeywordList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  Dialog,
} from "../components/ui/dialog";
import { Plus } from "lucide-react";

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

      <div className="flex justify-between items-center mb-6 mt-5">
        <h1 className="text-xl sm:text-2xl font-bold">Translation Managment</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Select
              value={currentLanguage}
              onValueChange={(e) => setCurrentLanguage(e)}
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

      <DraggableKeywordList currentLang={currentLanguage} />

      <Dialog>
        <DialogTrigger className="bg-blue-600 text-white w-full rounded-xl flex justify-center items-center gap-1 p-4 mt-6">
          <Plus />
          Add keywords
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new Keyword</DialogTitle>
            <DialogDescription>
              Let's add new keyword to {currentLanguage}
            </DialogDescription>
          </DialogHeader>
          <AddKeywordForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
