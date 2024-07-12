import { createContext, ReactNode, useContext, useState } from "react";

const AppContext = createContext({} as any);
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [showModalParts, setShowModalParts] = useState<boolean>(false);
    const [showModalPDV, setShowModalPDV] = useState<boolean>(false);
    const [sendOrderParts, setSendOrderParts] = useState<any>([]);
    return (
        <AppContext.Provider
            value={{
                showModalParts,
                setShowModalParts,
                sendOrderParts,
                setSendOrderParts,
                showModalPDV,
                setShowModalPDV
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => useContext(AppContext);