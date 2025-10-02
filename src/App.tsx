import React from 'react';
import './App.css';
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";

function App(): React.ReactElement {

    return (
        <div className="App">
            <Hover/>
        </div>
    );
}

export default App;
