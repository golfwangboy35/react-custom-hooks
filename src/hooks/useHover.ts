import { useState, useEffect, RefObject } from "react";

export default function useHover<T extends HTMLElement>(ref: RefObject<T | null>): boolean {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    
    const on = (): void => setIsHovering(true);
    const off = (): void => setIsHovering(false);

    useEffect(() => {
        if (!ref.current) {
            return;
        }
        
        const node = ref.current;
        node.addEventListener("mouseenter", on);
        node.addEventListener("mousemove", on);
        node.addEventListener("mouseleave", off);

        return function cleanup(): void {
            node.removeEventListener("mouseenter", on);
            node.removeEventListener("mouseleave", off);
            node.removeEventListener("mousemove", on);
        };
    }, [ref]); 
    
    return isHovering;
}