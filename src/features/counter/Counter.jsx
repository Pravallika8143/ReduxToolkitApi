import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec } from "./counterSlice";

function Counter() {
    const { count } = useSelector(state => state.counterR);
    const dispatch = useDispatch();

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow-lg p-4" style={{ width: "24rem" }}>
                
                <h3 className="text-center fw-bold text-dark mb-4">
                    Counter
                </h3>

                <div className="text-center mb-4">
                    <span className="fs-1 text-dark">{count}</span>
                </div>

                <div className="d-flex justify-content-between">
                    <button
                        className="btn btn-success w-45"
                        onClick={() => dispatch(inc())}
                    >
                        Increment
                    </button>

                    <button
                        className="btn btn-danger w-45"
                        onClick={() => dispatch(dec())}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
