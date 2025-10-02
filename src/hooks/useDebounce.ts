import { useCallback, useRef } from "react";

export default function useDebounce<T extends (...args: any[]) => any>(
    callback: T, 
    delay: number = 0
): T {
    const timer = useRef<NodeJS.Timeout | null>(null);
    
    const debouncedCallback = useCallback((...args: Parameters<T>) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
    
    return debouncedCallback as T;
}