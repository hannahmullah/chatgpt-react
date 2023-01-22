import React from "react";

export default function Translation({ doStuff, setInput, result }) {
    return (
        <div>
            <textarea className="text-area"
                cols={80}
                rows={10}
                onChange={(e) => setInput(e.target.value)}
            ></textarea>
            <button className="enter-btn" onClick={doStuff}>
                Enter
            </button>
            {/* <button className="reset-btn" >Reset</button> */}

            <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
        </div>
    )
}