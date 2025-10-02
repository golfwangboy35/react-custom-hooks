import React, { useState } from 'react';
import './App.css';
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import useDebounce from "./hooks/useDebounce";

function App(): React.ReactElement {
    const [value, setValue] = useState<string>('');

    const search = async (query: string): Promise<void> => {
        if (!query.trim()) {
            return;
        }
        
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?q=${query}`);
            const data = await response.json();
            console.log('Search results:', data);
        } catch (error) {
            console.error('Error fetching:', error);
        }
    };
    
    const debouncedSearch = useDebounce(search, 500);

    return (
        <div className="App">
            <input
                type="text" 
                value={value} 
                placeholder="Search todos..."
                onChange={(e) => {
                    setValue(e.target.value);
                    debouncedSearch(e.target.value);
                }} 
            />
        </div>
    );
}

export default App;
