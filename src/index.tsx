import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return <div>
        <textarea></textarea>
        <div>
            <button>Submit</button>
        </div>
        <pre></pre>
    </div>
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
