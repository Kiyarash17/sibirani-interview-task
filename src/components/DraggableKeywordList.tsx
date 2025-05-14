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

type Props = {
  currentLang: string;
};

function DraggableKeywordList(props: Props) {
  const { data, reorderKeywords } = useTranslation();
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // بخاطر باگ اینپوت ها ادد شد که کار نمیکردن
      },
    })
  );

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
        <Card className="p-5 gap-0 overflow-y-auto">
          {data.order.map((keyword) => (
            <DraggableKeyword
              key={keyword}
              keyword={keyword}
              currentLang={props.currentLang!}
            />
          ))}
        </Card>
      </SortableContext>
    </DndContext>
  );
}

function DraggableKeyword({
  keyword,
  currentLang,
}: {
  keyword: string;
  currentLang: string;
}) {
  const { data, editTranslation } = useTranslation();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: keyword });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex gap-2 py-4 items-center justify-between bg-white cursor-grab active:cursor-grabbing border-b"
    >
      <span className="w-32 font-bold">{keyword}</span>
      <Input
        key={currentLang}
        value={data.translations[currentLang][keyword] || "........"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          editTranslation(keyword, currentLang, e.target.value)
        }
        className={`min-w-8 w-fit border-none text-center ${!data.translations[currentLang][keyword] ? "bg-red-500 text-white": "bg-gray-200" }`}
      />
    </div>
  );
}

export default DraggableKeywordList;
