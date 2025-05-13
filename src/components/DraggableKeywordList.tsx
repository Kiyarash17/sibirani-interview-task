import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useTranslation } from "../context/TranslationContext";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";

function DraggableKeywordList() {
  const { data, reorderKeywords } = useTranslation();
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = data.order.indexOf(active.id as string);
      const newIndex = data.order.indexOf(over.id as string);
      reorderKeywords(arrayMove(data.order, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={data.order}
        strategy={verticalListSortingStrategy}
      >
        {data.order.map((keyword) => (
          <DraggableKeyword key={keyword} keyword={keyword} />
        ))}
      </SortableContext>
    </DndContext>
  );
}

function DraggableKeyword({ keyword }: { keyword: string }) {
  const { data, editTranslation } = useTranslation();
  const languages = Object.keys(data.translations);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: keyword });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex gap-2 p-2 items-center bg-white"
    >
      <span className="w-32 font-bold">{keyword}</span>
      {languages.map((lang) => (
        <Input
          key={lang}
          value={data.translations[lang][keyword] || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => editTranslation(keyword, lang, e.target.value)}
          className="w-full"
        />
      ))}
    </Card>
  );
}

export default DraggableKeywordList;
