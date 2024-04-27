import { useContext } from "react";
import { CentralContext } from "@/contexts"

const useCentral = () => {
    const context = useContext(CentralContext)
    
    if (!context) throw console.error("No central context to return");
    return context;
}
 
export default useCentral;