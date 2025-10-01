import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState('');
  return (
    <div className="App">
      <input type="text" value={value} onChange={(e) =>setValue(e.target.value)} />
        <button onClick={() => console.log(value)}>ClickMe</button>
    </div>
  );
}

export default App;
