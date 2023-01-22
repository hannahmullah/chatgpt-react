import React from "react";

export default function OptionSelection({ arrayItems, selectOption }) {
    return (
        <>
            <h1>React Ai app</h1>

            <div className="grid-main">
                {arrayItems.map((item, index) => {
                    return (
                        <div
                            className="grid-child"
                            key={index}
                            onClick={() => selectOption(item.option)}
                        >
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </>

    );
}
