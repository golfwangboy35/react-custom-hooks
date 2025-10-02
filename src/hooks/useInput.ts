import {useState} from "react";

interface UseInputReturn {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function useInput(initialValue: string): UseInputReturn {
    const [value, setValue] = useState<string>(initialValue);
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.currentTarget.value);
    }
    
    return { value, onChange };
}