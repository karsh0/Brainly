import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useContents } from "@/hooks/useContents";
import { useMemo } from "react";
import { ContentType } from "./CreateContentModal";

export function Layout({ children }) {
    const contents = useContents()
     // Memoized counts
      const counts = useMemo(() => {
        return {
          content: contents.length,
          youtube: contents.filter((c) => c.type === ContentType.Youtube).length,
          tweet: contents.filter((c) => c.type === ContentType.Twitter).length,
          document: contents.filter((c) => c.type === ContentType.Document).length,
          link: contents.filter((c) => c.type === ContentType.Link).length,
        };
      }, [contents]);
    
    return (
        <SidebarProvider>
            <AppSidebar counts={counts} />
                {children}
        </SidebarProvider >
    )
}