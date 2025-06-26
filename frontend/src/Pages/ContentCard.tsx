import axios from "axios";
import { useEffect } from "react";
import {
  DeleteIcon,
  Notebook,
  Package,
  ShareIcon,
  Trash2,
  TwitterIcon,
  VideoIcon,
} from "lucide-react";
import { BACKEND_URL } from "../config";
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

  // Ensure Twitter widgets.js is reloaded for each tweet
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
  }, [type, link]);

  const renderIcon = () => {
    switch (type) {
      case "Youtube":
        return <VideoIcon className="w-5 h-5" />;
      case "Twitter":
        return <TwitterIcon className="w-5 h-5" />;
      case "Document":
        return <Package className="w-5 h-5" />;
      default:
        return <Notebook className="w-5 h-5" />;
    }
  };

  return (
    <motion.div 
    className="w-96 h-2xl max-h-full max-w-xl rounded-xl border border-gray-300 dark:border-gray-600 p-5 shadow-sm transition-all duration-300 hover:shadow-md bg-white dark:bg-zinc-900"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 items-center">
          {renderIcon()}
          <p className="text-lg font-semibold">{title}</p>
        </div>
        <div onClick={onDelete} className="cursor-pointer hover:text-red-500">
          <Trash2 className="w-5 h-5" />
        </div>
      </div>

      {/* Content */}
      <div className="pt-2 space-y-3">
        {type === "Youtube" && (() => {
          let videoId = "";
          try {
            const url = new URL(link);
            if (url.hostname.includes("youtube.com")) {
              videoId = url.searchParams.get("v") || "";
            } else if (url.hostname.includes("youtu.be")) {
              videoId = url.pathname.slice(1);
            }
          } catch (err) {
            console.error("Invalid YouTube URL", err);
          }

          return videoId ? (
            <iframe
              className="w-full aspect-video rounded-md"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <p className="text-sm text-red-500">Invalid YouTube link</p>
          );
        })()}

        {type === "Twitter" && (
          <div className="w-full max-h-[250px] overflow-hidden rounded-md">
            <blockquote
              className="twitter-tweet"
              data-theme="dark"
              style={{ transform: "scale(0.9)", transformOrigin: "top left" }}
            >
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-200 dark:bg-zinc-700 text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-2 text-sm break-words overflow-hidden ">
      {content}
      </div>
    </motion.div>
  );
};
