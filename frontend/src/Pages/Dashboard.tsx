import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TypeProvider } from "@/hooks/type-provider";
import { useContents } from "@/hooks/useContents";
import { ContentType } from "@/Types/types";
import React, { useMemo, useState } from "react";
import { ContentLayout } from "./ContentLayout";

export function Dashboard() {
    const contents = useContents()

    const counts = useMemo(() => {
        return {
          Content: contents.length,
          Youtube: contents.filter((c:any) => c.type === ContentType.Youtube).length,
          Twitter: contents.filter((c:any) => c.type === ContentType.Twitter).length,
          Document: contents.filter((c:any) => c.type === ContentType.Document).length,
          Link: contents.filter((c:any) => c.type === ContentType.Link).length,
        };
      }, [contents]);


    
    return (
        <SidebarProvider>
          <TypeProvider>
            <AppSidebar counts={counts}  />
                <ContentLayout contents={contents}/>
          </TypeProvider>
        </SidebarProvider >
    )
}