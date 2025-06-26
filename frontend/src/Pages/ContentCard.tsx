import { useEffect } from "react";
import {
  Notebook,
  Package,
  Trash2,
  TwitterIcon,
  VideoIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface CardInterface {
  title: string;
  content: string;
  link: string;
  tags: string[];
  type: string;
  onDelete: (e: any) => void;
}

export const ContentCard = ({
  link,
  title,
  type,
  content,
  tags,
  onDelete,
}: CardInterface) => {

useEffect(() => {
  if (type === "Twitter") {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }

  return () => {};
}, [type, link]);

  const renderIcon = () => {
    switch (type) {
      case "Youtube":
        return <VideoIcon className="w-5 h-5 text-red-500" />;
      case "Twitter":
        return <TwitterIcon className="w-5 h-5 text-sky-500" />;
      case "Document":
        return <Package className="w-5 h-5 text-emerald-500" />;
      default:
        return <Notebook className="w-5 h-5 text-violet-500" />;
    }
  };

  const renderMedia = () => {
    if (type === "Youtube") {
      let videoId = "";
      try {
        const url = new URL(link);
        if (url.hostname.includes("youtube.com")) {
          videoId = url.searchParams.get("v") || "";
        } else if (url.hostname.includes("youtu.be")) {
          videoId = url.pathname.slice(1);
        }
      } catch {
        console.error("Invalid YouTube URL");
      }

      return videoId ? (
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <p className="text-sm text-red-500">Invalid YouTube link</p>
      );
    }

    if (type === "Twitter") {
      return (
        <div className="w-full max-h-[200px] overflow-hidden rounded-lg border border-zinc-300 dark:border-zinc-700">
          <blockquote
            className="twitter-tweet"
            data-theme="dark"
            style={{ transform: "scale(0.9)", transformOrigin: "top left" }}
          >
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        </div>
      );
    }

    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full max-w-sm min-h-[460px] rounded-2xl border border-zinc-200 dark:border-zinc-700 p-5 shadow-md dark:shadow-none bg-white dark:bg-zinc-900 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Header */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-3 items-center">
            {renderIcon()}
            <p className="text-base md:text-lg font-semibold truncate max-w-[220px]">
              {title}
            </p>
          </div>
          <button
            onClick={onDelete}
            className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-800 transition-colors"
          >
            <Trash2 className="w-5 h-5 text-red-500" />
          </button>
        </div>

        {/* Media Section */}
        <div className="mb-4">{renderMedia()}</div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-zinc-100 dark:bg-zinc-700 text-xs text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer: Content */}
      <div className="mt-4 text-sm md:text-base text-zinc-700 dark:text-zinc-300 break-words whitespace-pre-wrap line-clamp-[18]">
        {content}
      </div>
    </motion.div>
  );
};
