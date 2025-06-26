import { ContentType } from "@/Types/types";
import { createContext, useContext, useState } from "react";

interface TypeContextValue {
  selectedType: ContentType;
  setSelectedType: (type: ContentType) => void;
}

const TypeContext = createContext<TypeContextValue | undefined>(undefined);

export const TypeProvider = ({ children }: { children: React.ReactNode }) =>{
    const [ selectedType, setSelectedType ] = useState<ContentType>(ContentType.Content)

    return <TypeContext.Provider value={{selectedType, setSelectedType}}>
        {children}
    </TypeContext.Provider>
} 

export const useType = () => {
  const context = useContext(TypeContext);
  if (!context) {
    throw new Error("useType must be used within a TypeProvider");
  }
  return context;
};