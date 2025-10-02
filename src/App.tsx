import React, { useCallback } from 'react';
import './App.css';
import axios from "axios";
import useRequest from "./hooks/useRequest";

interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

function App(): React.ReactElement {
    const fetchTodos = useCallback(async () => {
        return await axios.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos`);
    }, []);

    const [todos, loading, error] = useRequest<Todo[]>(fetchTodos);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <div className="App">
            <h1>Todos List</h1>
            {todos && todos.map((todo: Todo) => (
                <div key={todo.id} style={{ padding: 30, border: '2px solid black', margin: '10px 0' }}>
                    <h3>{todo.id}. {todo.title}</h3>
                    <p>Status: {todo.completed ? '✅ Completed' : '⏳ Pending'}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
