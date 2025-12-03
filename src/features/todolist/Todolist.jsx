import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todolistSlice";

function TodoList() {
    const { todos } = useSelector(state => state.todolistR);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "32rem" }}>
                
                <h3 className="text-center fw-bold mb-4">Todo List</h3>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add new todo..."
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            if (newTodo.trim() !== "") {
                                dispatch(addTodo(newTodo.trim()));
                                setNewTodo("");
                            }
                        }}
                    >
                        Add Todo
                    </button>
                </div>

                <ul className="list-group">
                    {todos.length === 0 && (
                        <li className="list-group-item text-muted text-center">
                            No todos yet.
                        </li>
                    )}
                    {todos.map((todo, index) => (
                        <li key={index} className="list-group-item">
                            {todo}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
