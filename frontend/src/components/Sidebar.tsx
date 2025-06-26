import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import {
  Home,
  Package,
  YoutubeIcon,
  TwitterIcon,
  Link2,
} from "lucide-react";
import { ContentType } from "@/Types/types";
import { useState } from "react";
import { useType } from "@/hooks/type-provider";

const items = [
  {
    title: "All Content",
    url: "/contents",
    icon: Home,
    type: ContentType.Content,
  },
  {
    title: "Document",
    url: "/document",
    icon: Package,
    type: ContentType.Document,
  },
  {
    title: "Links",
    url: "/links",
    icon: Link2,
    type: ContentType.Link,
  },
  {
    title: "Youtube",
    url: "/youtube",
    icon: YoutubeIcon,
    type: ContentType.Youtube,
  },
  {
    title: "Tweet",
    url: "/tweet",
    icon: TwitterIcon,
    type: ContentType.Twitter,
  },
];

export function AppSidebar({ counts }: { counts: Record<string, number> }) {

  const { selectedType, setSelectedType } = useType()

  return (
    <Sidebar className="dark:border-gray-600">
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg text-black dark:text-white font-semibold py-8 pt-10 tracking-wider">
            CONTENT
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={`py-6 rounded-md transition-colors duration-200 ${selectedType === item.type
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-white text-black hover:bg-gray-200 dark:bg-zinc-900 dark:text-white dark:hover:text-black dark:hover:bg-gray-200"
                      }`}
                    asChild
                  >

                    <div className="flex justify-between items-center w-full" onClick={() => {
                      setSelectedType(item.type)
                    }}>
                      <div className="flex gap-3 items-center">
                        <item.icon className="w-6 h-6" />
                        <span className="text-base font-medium">{item.title}</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="min-w-6 h-6 text-sm px-2 py-1 rounded-full flex items-center justify-center"
                      >
                        {counts[item.type] || 0}
                      </Badge>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
