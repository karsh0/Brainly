import React, { useEffect, useMemo, useState, useCallback } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContentType, CreateContentModal } from "./CreateContentModal";
import { BACKEND_URL } from "../config";
import { ContentCard } from "./ContentCard";
import { Navbar } from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { motion } from "framer-motion";
import { Layout } from "./Layout";

interface contentProps {
  link: string;
  type: string;
  title: string;
  content: string;
  tags: string[];
}

export const ContentLayout = ({ contents }: { contents: contentProps[] }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContents = useMemo(() => {
    return searchQuery
      ? contents.filter((c) =>
          c.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : contents;
  }, [searchQuery, contents]);

 
  const deleteCard = useCallback(
    async (link: string) => {
      try {
        await axios.delete(`${BACKEND_URL}/api/v1/content`, {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
          data: { link },
        });
      } catch (error) {
        console.error("Error deleting the post", error);
        alert("Failed to delete post");
      }
    },
    []
  );

  return (
    <Layout>
      <div className="w-full min-h-screen bg-muted/40 text-black dark:text-white">
        <Navbar />
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />

        <main className="w-full p-6 md:p-8 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Input
              className="max-w-xl px-5 py-6 text-lg rounded-lg"
              placeholder="Search your contents..."
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <Button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 px-6 py-6 text-lg rounded-lg"
            >
              Add Content
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            {filteredContents.map(({ title, content, type, link, tags }) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ContentCard
                  title={title}
                  content={content}
                  link={link}
                  type={type}
                  tags={tags}
                  onDelete={() => deleteCard(link)}
                />
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};
