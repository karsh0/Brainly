import { useContents } from "@/hooks/useContents";
import { ContentLayout } from "./ContentLayout";

export const Dashboard = () => {
  const contents = useContents();
  return (
    <ContentLayout contents={contents}/>
  );
};
