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

const items = [
  {
    title: "All Content",
    url: "/contents",
    icon: Home,
    key: "content",
  },
  {
    title: "Document",
    url: "/document",
    icon: Package,
    key: "document",
  },
  {
    title: "Links",
    url: "/links",
    icon: Link2,
    key: "link",
  },
  {
    title: "Youtube",
    url: "/youtube",
    icon: YoutubeIcon,
    key: "youtube",
  },
  {
    title: "Tweet",
    url: "/tweet",
    icon: TwitterIcon,
    key: "tweet",
  },
];

export function AppSidebar({ counts }: { counts: Record<string, number> }) {
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
                    className="hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition duration-200 ease-out py-6 rounded-md"
                    asChild
                  >
                    <Link to={item.url} className="flex justify-between items-center w-full">
                      <div className="flex gap-3 items-center">
                        <item.icon className="w-6 h-6" />
                        <span className="text-base font-medium">{item.title}</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="min-w-6 h-6 text-sm px-2 py-1 rounded-full flex items-center justify-center"
                      >
                        {counts[item.key] || 0}
                      </Badge>
                    </Link>
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
