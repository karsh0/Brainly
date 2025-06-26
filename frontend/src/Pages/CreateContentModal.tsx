import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { X } from "lucide-react";

import { BACKEND_URL } from "../config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ContentType } from "@/Types/types";


interface Props {
  open: boolean;
  onClose: () => void;
  onContentAdded?: () => void;
}

export function CreateContentModal({ open, onClose, onContentAdded }: Props) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [type, setType] = useState<ContentType>(ContentType.Youtube);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const addTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newTag = tagsRef.current?.value.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      if (tagsRef.current) {
        tagsRef.current.value = "";
      }
    }
  };

  async function handleAddContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const content = contentRef.current?.value;

    if (!title || title.length > 100) return;

    try {
      setLoading(true);
      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        { title, link, tags, type, content },
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        }
      );

      onContentAdded?.();

      setTags([]);
      titleRef.current!.value = "";
      linkRef.current!.value = "";
      contentRef.current!.value = "";
      tagsRef.current!.value = "";
      setType(ContentType.Youtube);

      onClose();
    } catch (error) {
      console.error("Error adding content:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-zinc-900 rounded-xl w-[400px] p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Create New Content
          </h3>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-1">
              Title
            </label>
            <Input ref={titleRef} placeholder="15 Character limit" autoFocus />
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-1">
              Link (Optional)
            </label>
            <Input ref={linkRef} placeholder="Enter URL" />
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-1">
              Type
            </label>
            <Select value={type} onValueChange={(val) => setType(val as ContentType)}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ContentType.Youtube}>Video</SelectItem>
                <SelectItem value={ContentType.Twitter}>Tweet</SelectItem>
                <SelectItem value={ContentType.Link}>Link</SelectItem>
                <SelectItem value={ContentType.Document}>Document</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-1">
              Tags
            </label>
            <Input
              ref={tagsRef}
              placeholder="Press Enter to add tag"
              onKeyUp={addTags}
            />
            <div className="flex flex-wrap mt-2 gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} className="flex items-center gap-1 pr-1">
                  {tag}
                  <button onClick={() => setTags(tags.filter((_, i) => i !== index))}>
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-1">
              Content (Optional)
            </label>
            <Textarea ref={contentRef} placeholder="Enter content details" rows={4} />
          </div>

          <Button className="w-full py-5" onClick={handleAddContent} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
}
