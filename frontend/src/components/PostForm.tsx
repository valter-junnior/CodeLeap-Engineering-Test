import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface Props {
  onSubmit: (title: string, content: string) => void;
  initialTitle?: string;
  initialContent?: string;
  submitLabel?: string;
  onCancel?: () => void;
}

export default function PostForm({
  onSubmit,
  initialTitle = "",
  initialContent = "",
  submitLabel = "Create",
  onCancel
}: Props) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setTitle(initialTitle);
    setContent(initialContent);
  }, [initialTitle, initialContent]);

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;
    onSubmit(title, content);
    if (!onCancel) {
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="Hello world"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex justify-end space-x-2">
        {onCancel && (
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button
          onClick={handleSubmit}
          className={submitLabel === "Save" ? "bg-green-600 hover:bg-green-700" : ""}
        >
          {submitLabel}
        </Button>
      </div>
    </div>
  );
}
