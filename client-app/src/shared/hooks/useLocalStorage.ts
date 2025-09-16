import { useState } from "react";

const useLocalStorage = (key: string, initialValue?: string): [value: string, setValue: ((value: string) => void)] => {
    const getCachedValue = (): string => {
        return localStorage.getItem(key) ?? "";
    }
    
    const cacheValue = (value: string): void => {
        localStorage.setItem(key, value);
        setValue(value);
    }
    
    const [value, setValue] = useState<string>(getCachedValue() || initialValue || "");
    
    return [
        value,
        cacheValue,
    ]
}

export default useLocalStorage;