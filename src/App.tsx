import React from 'react';
import './App.css';
import useInput from "./hooks/useInput";

function App(): React.ReactElement {
    const username = useInput('');
    const password = useInput('');
    
    const handleClick = (): void => {
        console.log(username.value, password.value);
    };
    
    return (
        <div className="App">
            <input {...username} type="text" placeholder="Enter User name" />
            <input {...password} type="password" placeholder="Enter Password" />
            <button onClick={handleClick}>ClickMe</button>
        </div>
    );
}

export default App;
